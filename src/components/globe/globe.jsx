"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const Earth = ({ className = "", theta = 0.25, dark = 1, scale = 1.1, diffuse = 1.2, mapSamples = 40000, mapBrightness = 6, baseColor = [0.4, 0.6509, 1], markerColor = [1, 0, 0], glowColor = [0.2745, 0.5765, 0.898] }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta,
      dark,
      scale,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [],
    });

    let animationFrameId;

    const animate = () => {
      phi += 0.003;
      globe.update({ phi });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
    };
  }, [theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor]);

  return (
    <div className={`z-10 mx-auto flex w-full max-w-[350px] items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
};

export default Earth;
