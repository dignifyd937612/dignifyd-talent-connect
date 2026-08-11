"use client";
import React, { useRef, useMemo, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import { Location, LocationIcon } from "@hugeicons/core-free-icons";

const DEFAULT_EARTH_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
const DEFAULT_BUMP_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

function Marker({ marker, radius, defaultSize, onClick, onHover }) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const imageGroupRef = useRef(null);
  const lastVisibilityRef = useRef(true);

  const { camera } = useThree();

  // =========================================
  // Marker surface position
  // =========================================

  const surfacePosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius * 1.001);
  }, [marker.lat, marker.lng, radius]);

  // =========================================
  // Marker top position
  // =========================================

  const topPosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius * 1.18);
  }, [marker.lat, marker.lng, radius]);

  // =========================================
  // Marker line height
  // =========================================

  const lineHeight = useMemo(() => {
    return topPosition.distanceTo(surfacePosition);
  }, [topPosition, surfacePosition]);

  // =========================================
  // Check marker visibility
  // =========================================

  useFrame(() => {
    if (!imageGroupRef.current) return;

    const worldPos = new THREE.Vector3();

    imageGroupRef.current.getWorldPosition(worldPos);

    const markerDirection = worldPos.clone().normalize();
    const cameraDirection = camera.position.clone().normalize();

    const dot = markerDirection.dot(cameraDirection);

    const visible = dot > 0.1;

    // Only update state when visibility changes
    if (visible !== lastVisibilityRef.current) {
      lastVisibilityRef.current = visible;

      setIsVisible(visible);

      // Close card if marker goes behind globe
      if (!visible && hovered) {
        setHovered(false);
        onHover?.(null);
      }
    }
  });

  // =========================================
  // Hover
  // =========================================

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    onHover?.(marker);
  }, [marker, onHover]);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    onHover?.(null);
  }, [onHover]);

  // =========================================
  // Click
  // =========================================

  const handleClick = useCallback(() => {
    onClick?.(marker);
  }, [marker, onClick]);

  // =========================================
  // Line position + rotation
  // =========================================

  const { lineCenter, lineQuaternion } = useMemo(() => {
    const center = surfacePosition.clone().lerp(topPosition, 0.5);

    const direction = topPosition.clone().sub(surfacePosition).normalize();

    const quaternion = new THREE.Quaternion();

    quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

    return {
      lineCenter: center,
      lineQuaternion: quaternion,
    };
  }, [surfacePosition, topPosition]);

  return (
    <group>
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[0.003, 0.003, lineHeight, 8]} />

        <meshBasicMaterial
          color={hovered ? "#ffffff" : "#94a3b8"}
          transparent
          opacity={hovered ? 0.9 : 0.6}
        />
      </mesh>

      <mesh position={surfacePosition} quaternion={lineQuaternion}>
        <coneGeometry args={[0.015, 0.04, 8]} />

        <meshBasicMaterial color={hovered ? "#a855f7" : "#ef4444"} />
      </mesh>

      <group ref={imageGroupRef} position={topPosition}>
        <Html
          transform
          center
          sprite
          distanceFactor={8}
          zIndexRange={[100, 0]}
          style={{
            pointerEvents: isVisible ? "auto" : "none",

            opacity: isVisible ? 1 : 0,

            transition: "opacity 0.15s ease-out",
          }}
        >
          <div
            onMouseEnter={handlePointerEnter}
            onMouseLeave={handlePointerLeave}
            onClick={handleClick}
            className={cn(
              "cursor-pointer overflow-hidden rounded-full",
              "bg-neutral-900",
              "shadow-lg",
              "transition-all duration-200",
              hovered &&
                "scale-125 shadow-[0_0_20px_rgba(168,85,247,0.8)] ring-2 ring-purple-400",
            )}
            style={{
              width: "12px",
              height: "12px",
            }}
          >
            <img
              src={marker.src}
              alt={marker.label || "Marker"}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </Html>

        <Html
          center
          zIndexRange={[10000, 5000]}
          style={{
            pointerEvents: hovered ? "auto" : "none",

            opacity: isVisible && hovered ? 1 : 0,

            transition: "opacity 0.2s ease",
          }}
        >
          <div
            onMouseEnter={handlePointerEnter}
            onMouseLeave={handlePointerLeave}
            className={cn(
              "pointer-events-auto absolute",
              "bottom-7 left-1/2",
              "-translate-x-1/2",

              "w-[240px]",
              "max-w-[240px]",

              "rounded-2xl",
              "border border-purple-500/30",
              "bg-black/95",
              "p-4",
              "text-left",

              "shadow-[0_15px_50px_rgba(0,0,0,0.5)]",

              "backdrop-blur-xl",

              "transition-all duration-300",

              hovered
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible translate-y-2 scale-95 opacity-0",
            )}
          >
            <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/15">
                {marker.src ? (
                  <img
                    src={marker.src}
                    alt=""
                    className="h-6 w-6 rounded-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <span className="text-sm">
                    <LocationIcon />
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <p className="text-[10px] tracking-wider text-purple-400 uppercase">
                  Location
                </p>

                <p className="truncate text-sm font-semibold text-white">
                  {marker.label || "Global Location"}
                </p>
              </div>
            </div>

            {marker.description && (
              <p className="mb-3 text-xs leading-5 text-gray-400">
                {marker.description}
              </p>
            )}

            {(marker.address || marker.phone || marker.lifestyle) && (
              <div className="space-y-3 border-t border-white/10 pt-3">
                {marker.address && (
                  <div className="border-l border-purple-500 pl-2">
                    <p className="text-[10px] tracking-wider text-purple-400 uppercase">
                      Address
                    </p>

                    <p className="mt-1 text-xs leading-4 text-gray-400">
                      {marker.address}
                    </p>
                  </div>
                )}

                {marker.phone && (
                  <div className="border-l border-purple-500 pl-2">
                    <p className="text-[10px] tracking-wider text-purple-400 uppercase">
                      Phone
                    </p>

                    <p className="mt-1 text-xs text-gray-400">{marker.phone}</p>
                  </div>
                )}

                {marker.lifestyle && (
                  <div className="border-l border-purple-500 pl-2">
                    <p className="text-[10px] tracking-wider text-purple-400 uppercase">
                      Local Experience
                    </p>

                    <p className="mt-1 text-xs leading-4 text-gray-400">
                      {marker.lifestyle}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Html>
      </group>
    </group>
  );
}

function RotatingGlobe({ config, markers, onMarkerClick, onMarkerHover }) {
  const groupRef = useRef(null);

  const [earthTexture, bumpTexture] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ]);

  useMemo(() => {
    if (earthTexture) {
      earthTexture.colorSpace = THREE.SRGBColorSpace;
      earthTexture.anisotropy = 16;
    }
    if (bumpTexture) {
      bumpTexture.anisotropy = 8;
    }
  }, [earthTexture, bumpTexture]);

  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius, 64, 64);
  }, [config.radius]);

  const wireframeGeometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius * 1.002, 32, 16);
  }, [config.radius]);

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.7}
          metalness={0.0}
        />
      </mesh>
      {config.showWireframe && (
        <mesh geometry={wireframeGeometry}>
          <meshBasicMaterial
            color={config.wireframeColor}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      )}
      {markers.map((marker, index) => (
        <Marker
          key={`marker-${index}-${marker.lat}-${marker.lng}`}
          marker={marker}
          radius={config.radius}
          defaultSize={config.markerSize}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
        />
      ))}
    </group>
  );
}

function Atmosphere({ radius, color, intensity, blur }) {
  const fresnelPower = Math.max(0.5, 5 - blur);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        fresnelPower: { value: fresnelPower },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPosition))), fresnelPower);
          gl_FragColor = vec4(atmosphereColor, fresnel * intensity);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, [color, intensity, fresnelPower]);

  return (
    <mesh scale={[1.12, 1.12, 1.12]}>
      <sphereGeometry args={[radius, 64, 32]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </mesh>
  );
}

function Scene({ markers, config, onMarkerClick, onMarkerHover }) {
  const { camera } = useThree();

  React.useEffect(() => {
    camera.position.set(0, 0, config.radius * 3.5);
    camera.lookAt(0, 0, 0);
  }, [camera, config.radius]);

  return (
    <>
      <ambientLight intensity={config.ambientIntensity} />
      <directionalLight
        position={[config.radius * 5, config.radius * 2, config.radius * 5]}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.3}
        color="#88ccff"
      />
      <RotatingGlobe
        config={config}
        markers={markers}
        onMarkerClick={onMarkerClick}
        onMarkerHover={onMarkerHover}
      />
      {config.showAtmosphere && (
        <Atmosphere
          radius={config.radius}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity}
          blur={config.atmosphereBlur}
        />
      )}
      <OrbitControls
        makeDefault
        enablePan={config.enablePan}
        enableZoom={config.enableZoom}
        minDistance={config.minDistance}
        maxDistance={config.maxDistance}
        rotateSpeed={0.4}
        autoRotate={config.autoRotateSpeed > 0}
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}

const defaultConfig = {
  radius: 2,
  globeColor: "#1a1a2e",
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  showAtmosphere: false,
  atmosphereColor: "#4da6ff",
  atmosphereIntensity: 0.5,
  atmosphereBlur: 2,
  bumpScale: 1,
  autoRotateSpeed: 0.3,
  enableZoom: false,
  enablePan: false,
  minDistance: 5,
  maxDistance: 15,
  initialRotation: { x: 0, y: 0 },
  markerSize: 0.06,
  showWireframe: false,
  wireframeColor: "#4a9eff",
  ambientIntensity: 0.6,
  pointLightIntensity: 1.5,
  backgroundColor: null,
};

export function Globe3D({
  markers = [],
  config = {},
  className,
  onMarkerClick,
  onMarkerHover,
}) {
  const mergedConfig = useMemo(
    () => ({ ...defaultConfig, ...config }),
    [config],
  );

  return (
    <div className={cn("relative h-[500px] w-full", className)}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0, mergedConfig.radius * 3.5],
        }}
        style={{
          background: mergedConfig.backgroundColor || "transparent",
        }}
      >
        <Suspense>
          <Scene
            markers={markers}
            config={mergedConfig}
            onMarkerClick={onMarkerClick}
            onMarkerHover={onMarkerHover}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Globe3D;
