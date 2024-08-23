"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { MyModel } from "./ModelView";

export default function My3DScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <MyModel />
    </Canvas>
  );
}
