"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ---------------------------------------------------------------------------
   Shader propio del "artefacto": material holográfico con borde fresnel,
   scanlines animadas y un leve desplazamiento orgánico de los vértices.
   Es lo que le da el aire "shader / retro-tech" a la escena.
--------------------------------------------------------------------------- */
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float d = sin(pos.x * 3.0 + uTime) * 0.06
            + sin(pos.y * 4.0 + uTime * 1.3) * 0.05
            + sin(pos.z * 5.0 + uTime * 0.7) * 0.04;
    pos += normal * d * uAmp;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewPosition = -mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - clamp(dot(normalize(vNormal), viewDir), 0.0, 1.0), 2.4);

    vec3 col = mix(uColorB * 0.10, uColorA, fresnel);
    float scan = 0.82 + 0.18 * sin((vUv.y * 200.0) + uTime * 6.0);
    col *= scan;
    col += uColorA * fresnel * 0.9;

    float alpha = clamp(fresnel * 1.35 + 0.10, 0.0, 1.0);
    gl_FragColor = vec4(col, alpha);
  }
`;

function Artifact({ reduced, small }: { reduced: boolean; small: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 1 },
      uColorA: { value: new THREE.Color("#ffc23d") },
      uColorB: { value: new THREE.Color("#6fd2ff") },
    }),
    []
  );

  useFrame((_, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += delta;
    const spin = reduced ? 0 : delta * 0.12;
    if (meshRef.current) meshRef.current.rotation.y += spin;
    if (wireRef.current) wireRef.current.rotation.y -= spin * 1.4;
  });

  const detail = small ? 4 : 6;

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, detail]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Wireframe overlay: detalle técnico */}
      <mesh ref={wireRef} scale={1.04}>
        <icosahedronGeometry args={[1.5, small ? 1 : 2]} />
        <meshBasicMaterial color="#ffc23d" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

function OrbitRing({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current && !reduced) {
      ref.current.rotation.z += delta * 0.08;
      ref.current.rotation.x += delta * 0.03;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[2.3, 0.008, 6, 140]} />
      <meshBasicMaterial color="#7dffb0" transparent opacity={0.22} />
    </mesh>
  );
}

/** Contenido de la escena: parallax con el puntero + artefacto + anillo. */
export default function ArtifactScene({
  reduced,
  small,
}: {
  reduced: boolean;
  small: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;
    const targetY = reduced ? 0 : pointer.x * 0.35;
    const targetX = reduced ? 0 : -pointer.y * 0.25;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={0.15} floatIntensity={0.5}>
        <Artifact reduced={reduced} small={small} />
        <OrbitRing reduced={reduced} />
      </Float>
    </group>
  );
}
