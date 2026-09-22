"use client";

import React, { Component, useEffect, useMemo, useRef, useState } from "react";

import { AdditiveBlending, BackSide, Color, Fog, Scene } from "three";

import ThreeGlobe from "three-globe";

import { Canvas, useThree } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import { useTheme } from "next-themes";

import countries from "@/data/globe.json";

const RING_PROPAGATION_SPEED = 3;
const CAMERA_Z = 300;

function isWebGLAvailable() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");

    const context =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    return !!context;
  } catch (error) {
    return false;
  }
}

class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Globe WebGL error:", error);
    console.warn("Globe error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }

    return this.props.children;
  }
}

function GlobeFallback() {
  return <div className="pointer-events-none absolute inset-0 h-full w-full" />;
}

function GlobeAtmosphereGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (!glowRef.current) {
      return;
    }

    const material = glowRef.current.material;

    let animationFrame;

    const animate = () => {
      if (!glowRef.current) {
        return;
      }

      if (material && material.uniforms && material.uniforms.time) {
        material.uniforms.time.value = performance.now() * 0.001;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <mesh ref={glowRef} scale={1.055} renderOrder={-1}>
      <sphereGeometry args={[100, 128, 128]} />

      <shaderMaterial
        transparent
        depthWrite={false}
        depthTest={false}
        side={BackSide}
        blending={AdditiveBlending}
        uniforms={{
          time: {
            value: 0,
          },
        }}
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vPosition;

          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec3 vNormal;
          varying vec3 vPosition;

          uniform float time;

          void main() {
            vec3 normal = normalize(vNormal);

           
            float rim =
              pow(
                1.0 - abs(normal.z),
                1.8
              );

            float y = normalize(vPosition).y;

           

            float topMask =
              smoothstep(
                -0.05,
                0.72,
                y
              );

            float warm =
              rim *
              topMask;

           

            float bottomMask =
              smoothstep(
                0.18,
                -0.82,
                y
              );

            float blue =
              rim *
              bottomMask;

           

            vec3 warmColor =
              vec3(
                1.0,
                0.32,
                0.055
              );

            vec3 blueColor =
              vec3(
                0.015,
                0.16,
                1.0
              );

           

            float warmGlow =
              pow(warm, 1.15);

            float blueGlow =
              pow(blue, 1.05);

            vec3 finalColor =
              warmColor * warmGlow +
              blueColor * blueGlow;

            float alpha =
              max(
                warmGlow,
                blueGlow
              );

           

            alpha =
              pow(
                alpha,
                1.25
              );

            gl_FragColor =
              vec4(
                finalColor,
                alpha * 0.95
              );
          }
        `}
      />
    </mesh>
  );
}

export function Globe({ globeConfig, data, isLightMode }) {
  const globeRef = useRef(null);
  const groupRef = useRef(null);

  const [isInitialized, setIsInitialized] = useState(false);

  const colors = useMemo(() => {
    if (isLightMode) {
      return {
        globe: "#d9d2e6",
        emissive: "#6b21a8",
        arc: "#a855f7",
        point: "#EC38A8",
        ring: "#c026d3",
        atmosphere: "#60a5fa",
      };
    }

    return {
      globe: "#010006",

      emissive: "#000003",

      arc: "#a855f7",

      point: "#EC38A8",

      ring: "#a855f7",

      atmosphere: "#2563eb",
    };
  }, [isLightMode]);

  const defaultProps = useMemo(
    () => ({
      pointSize: 0.8,
      showAtmosphere: true,
      atmosphereAltitude: 0.12,
      arcTime: 2000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      ...globeConfig,
    }),
    [globeConfig],
  );

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      try {
        const globe = new ThreeGlobe();

        globeRef.current = globe;

        groupRef.current.add(globe);

        setIsInitialized(true);
      } catch (error) {
        console.error("Failed to create ThreeGlobe:", error);

        setIsInitialized(false);
      }
    }

    return () => {
      if (globeRef.current && groupRef.current) {
        try {
          groupRef.current.remove(globeRef.current);

          globeRef.current.traverse((object) => {
            if (object.geometry) {
              object.geometry.dispose();
            }

            if (object.material) {
              const materials = Array.isArray(object.material)
                ? object.material
                : [object.material];

              materials.forEach((material) => {
                if (material && typeof material.dispose === "function") {
                  material.dispose();
                }
              });
            }
          });
        } catch (error) {
          console.warn("Error while disposing globe:", error);
        }

        globeRef.current = null;
      }

      setIsInitialized(false);
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isInitialized) {
      return;
    }

    try {
      const material = globeRef.current.globeMaterial();

      material.color = new Color(colors.globe);

      material.emissive = new Color(colors.emissive);

      material.emissiveIntensity = isLightMode ? 0.15 : 0.035;

      material.shininess = isLightMode ? 0.65 : 0.9;

      material.needsUpdate = true;
    } catch (error) {
      console.warn("Unable to update globe material:", error);
    }
  }, [isInitialized, isLightMode, colors.globe, colors.emissive]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) {
      return;
    }

    try {
      const points = [];

      data.forEach((arc) => {
        points.push({
          size: defaultProps.pointSize,
          order: arc.order,
          color: colors.point,
          lat: arc.startLat,
          lng: arc.startLng,
        });

        points.push({
          size: defaultProps.pointSize,
          order: arc.order,
          color: colors.point,
          lat: arc.endLat,
          lng: arc.endLng,
        });
      });

      const filteredPoints = points.filter((point, index, array) => {
        return (
          array.findIndex(
            (item) => item.lat === point.lat && item.lng === point.lng,
          ) === index
        );
      });

      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.48)
        .hexPolygonUseDots(true)
        .hexPolygonAltitude(() => (isLightMode ? 0.018 : 0.025))
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(colors.atmosphere)
        .atmosphereAltitude(
          isLightMode ? 0.08 : defaultProps.atmosphereAltitude,
        )
        .hexPolygonColor(() => "#ffffff");

      globeRef.current
        .arcsData(data)
        .arcStartLat((d) => d.startLat)
        .arcStartLng((d) => d.startLng)
        .arcEndLat((d) => d.endLat)
        .arcEndLng((d) => d.endLng)
        .arcColor(() => colors.arc)
        .arcAltitude((d) => Math.max(d.arcAlt || 0.2, 0.25))
        .arcStroke(() => 0.32)
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((d) => d.order || 0)
        .arcDashGap(18)
        .arcDashAnimateTime(() => defaultProps.arcTime);

      globeRef.current
        .pointsData(filteredPoints)
        .pointColor(() => colors.point)
        .pointsMerge(true)
        .pointAltitude(0.015)
        .pointRadius(0.65);

      globeRef.current
        .ringsData([])
        .ringColor(() => colors.ring)
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings,
        );
    } catch (error) {
      console.warn("Error while configuring globe:", error);
    }
  }, [
    isInitialized,
    data,
    isLightMode,

    colors.arc,
    colors.point,
    colors.ring,
    colors.atmosphere,

    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereAltitude,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data || data.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      if (!globeRef.current) {
        return;
      }

      try {
        const count = Math.max(1, Math.floor((data.length * 4) / 5));

        const randomIndexes = genRandomNumbers(
          0,
          data.length,
          Math.min(count, data.length),
        );

        const ringsData = data
          .filter((_, index) => randomIndexes.includes(index))
          .map((item) => ({
            lat: item.startLat,
            lng: item.startLng,
            color: colors.ring,
          }));

        globeRef.current.ringsData(ringsData);
      } catch (error) {
        console.warn("Ring animation error:", error);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isInitialized, data, colors.ring]);

  return <group ref={groupRef} />;
}

function WebGLRendererConfig() {
  const { gl } = useThree();

  useEffect(() => {
    if (!gl) {
      return;
    }

    try {
      gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      gl.setClearColor(0x000000, 0);
    } catch (error) {
      console.warn("Unable to configure WebGL renderer:", error);
    }
  }, [gl]);

  return null;
}

function WorldCanvas(props) {
  const { resolvedTheme } = useTheme();

  const isLightMode = resolvedTheme === "light";

  const scene = useMemo(() => {
    const newScene = new Scene();

    newScene.fog = new Fog(isLightMode ? 0xffffff : 0x000000, 500, 2000);

    return newScene;
  }, [isLightMode]);

  const lights = isLightMode
    ? {
        ambient: "#ffffff",

        top: "#ffb35c",

        bottom: "#155cff",

        side: "#a855f7",
      }
    : {
        ambient: "#ffffff",

        top: "#ff9d45",

        bottom: "#165dff",

        side: "#8b5cf6",
      };

  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        scene={scene}
        camera={{
          position: [0, 0, CAMERA_Z],
          fov: 45,
          near: 0.1,
          far: 2000,
        }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        fallback={<GlobeFallback />}
        className="!h-full !w-full"
      >
        <WebGLRendererConfig />

        <ambientLight
          color={lights.ambient}
          intensity={isLightMode ? 0.6 : 0.22}
        />

        <directionalLight
          color={lights.top}
          position={[0, 450, 300]}
          intensity={isLightMode ? 1.2 : 0.9}
        />

        <directionalLight
          color={lights.bottom}
          position={[0, -450, 250]}
          intensity={isLightMode ? 0.9 : 0.85}
        />

        <directionalLight
          color={lights.side}
          position={[-400, 100, 300]}
          intensity={isLightMode ? 0.35 : 0.12}
        />

        <Globe {...props} isLightMode={isLightMode} />

        {!isLightMode && <GlobeAtmosphereGlow />}

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={CAMERA_Z}
          maxDistance={CAMERA_Z}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

export function World(props) {
  const [webglAvailable, setWebglAvailable] = useState(null);

  useEffect(() => {
    const available = isWebGLAvailable();

    setWebglAvailable(available);
  }, []);

  if (webglAvailable === null) {
    return null;
  }

  if (!webglAvailable) {
    return <GlobeFallback />;
  }

  return (
    <WebGLErrorBoundary fallback={<GlobeFallback />}>
      <WorldCanvas {...props} />
    </WebGLErrorBoundary>
  );
}

export function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];

  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;

    if (!arr.includes(r)) {
      arr.push(r);
    }
  }

  return arr;
}
