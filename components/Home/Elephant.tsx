"use client";
import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { GLTF } from "three-stdlib";
import { useTheme } from "next-themes";
import { LuLoader2 } from "react-icons/lu";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useAppSelector, useAppDispatch, RootStateI } from "../../Store/Store";
import {
  openColorPicker,
  closeColorPicker,
  setColor,
} from "../../Store/ElephantColorSlice";

type GLTFResult = GLTF & {
  nodes: {
    elephant: THREE.Mesh;
  };
};

function ElephantMesh() {
  const ref = useRef<THREE.Mesh>(null!);

  const { nodes } = useGLTF("/models/elephant.glb") as GLTFResult;
  const body = nodes.elephant.children[1] as THREE.Mesh & {
    material: THREE.Material & { color: THREE.Color };
  };

  const { color } = useAppSelector(
    (store: RootStateI) => store.elephantColorReducer,
  );
  const dispatch = useAppDispatch();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 3) / 4,
      0.15 + Math.sin(t / 2) / 8,
    );
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });

  useEffect(() => {
    body.material.color = new THREE.Color(color);
  }, [color, body.material]);

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      onPointerEnter={(e) => {
        dispatch(openColorPicker());
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        window.open(`https://moshi-li.github.io/roaming-elephant/`, "_blank");
      }}
    >
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

function ColorPicker() {
  const { open, color } = useAppSelector(
    (store: RootStateI) => store.elephantColorReducer,
  );
  const dispatch = useAppDispatch();
  const ref = useDetectClickOutside({
    onTriggered: () => dispatch(closeColorPicker()),
  });

  return (
    open && (
      <div
        ref={ref}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:bottom-[initial] sm:left-[initial] sm:right-0 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2"
      >
        <HexColorPicker
          color={color}
          onChange={(color) => dispatch(setColor(color))}
        />
      </div>
    )
  );
}

export default function ElephantScene() {
  const { resolvedTheme } = useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <div className="relative h-full w-full">
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
        <ColorPicker />
      </div>
    </Suspense>
  );
}

useGLTF.preload("/models/elephant.glb");
