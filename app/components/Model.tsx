"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const colorButton = [
  {
    color: "blue",
    value: "blue",
  },
  {
    color: "red",
    value: "red",
  },
  {
    color: "green",
    value: "green",
  },
];

const Computers = () => {
  const computer = useGLTF("./desktop_pc/free_iphone_13_pro_2021.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <ambientLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={2}
        position={[0, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const My3DScene = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#threeD-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#threeD",
        },
        stagger: 0.5,
      }
    );
  });
  return (
    <div
      className="py-16 h-full flex flex-col items-center gap-16 bg-[rgba(150,109,109,0.1)] "
      id="threeD"
    >
      <div className="flex flex-col lg:flex-row gap-4 text-center lg:text-start w-full  lg:justify-evenly">
        <div className="text-[#86868B] text-5xl" id="threeD-text">
          Enjoy
        </div>
        <div className="text-[#86868B] text-5xl " id="threeD-text">
          iPhone 15 Pro Max
        </div>
      </div>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default My3DScene;
