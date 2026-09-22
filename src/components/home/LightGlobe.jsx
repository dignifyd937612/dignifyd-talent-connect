"use client";
import { Globe3D } from "@/components/ui/3d-globe";

export function Globe3DDemo() {
  return (
    <Globe3D
      config={{
        atmosphereColor: "#4da6ff",
        atmosphereIntensity: 20,
        bumpScale: 5,
        autoRotateSpeed: 0.3,
      }}
    />
  );
}
