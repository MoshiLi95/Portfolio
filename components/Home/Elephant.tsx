"use client";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useTheme } from "next-themes";
import { LuLoader2 } from "react-icons/lu";

type GLTFResult = GLTF & {
  nodes: {
    elephant: THREE.Mesh;
  };
};

function ElephantMesh() {
  const ref = useRef<THREE.Mesh>(null!);

  const { nodes } = useGLTF("/models/elephant.glb") as GLTFResult;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 3) / 4,
      0.15 + Math.sin(t / 2) / 8,
    );
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <primitive
        position={[0, 2, 0]}
        object={nodes.elephant}
        scale={0.055}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2.6]}
      ></primitive>
    </mesh>
  );
}

function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      <span className="animate-spin text-5xl font-semibold text-blue-600 dark:text-green-400">
        <LuLoader2 />
      </span>
    </div>
  );
}

export default function ElephantScene() {
  const { resolvedTheme } = useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [-5, 10, 10], fov: 35 }}>
        <fog attach="fog" args={["lightpink", 60, 100]} />

        <ElephantMesh />

        <Environment preset={resolvedTheme === "dark" ? "sunset" : "dawn"} />
        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.7}
          scale={20}
          blur={1.75}
          far={4.5}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
        <directionalLight
          position={[-1, -2, -5]}
          intensity={0.2}
          color="#0c8cbf"
        />
        <spotLight
          position={[5, 0, 5]}
          intensity={2.5}
          penumbra={1}
          angle={0.35}
          color="#0c8cbf"
        />
      </Canvas>
    </Suspense>
  );
}

useGLTF.preload("/models/elephant.glb");
