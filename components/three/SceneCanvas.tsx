"use client";

import { Canvas } from "@react-three/fiber";
import ArtifactScene from "./ArtifactScene";

/**
 * Envuelve el <Canvas> de R3F. Se importa de forma dinámica (ssr:false) desde
 * HeroScene para que el WebGL nunca corra en el servidor.
 */
export default function SceneCanvas({
  reduced,
  small,
}: {
  reduced: boolean;
  small: boolean;
}) {
  return (
    <Canvas
      dpr={[1, small ? 1.3 : 1.8]}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      // En mobile bajamos la carga; el frameloop sigue activo para el float.
      style={{ width: "100%", height: "100%" }}
    >
      <ArtifactScene reduced={reduced} small={small} />
    </Canvas>
  );
}
