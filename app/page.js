"use client";
import {
  Box,
  Environment,
  Fisheye,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";

import * as THREE from "three";
// import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import React, { useState, useEffect, useRef } from "react";
import Experience from "./experience";

export default function Home() {
  return (
    <main className=" h-screen w-full">
      <Canvas
        gl={{
          antialias: true,
          alpha: false,
        }}
        camera={{ position: [0, 0, 10], fov: 70, far: 20 }}
      >
        <fog attach="fog" color="#000000" near={1} far={10} intensity={0.1} />
        <color attach="background" args={["#060606"]} />
        <ambientLight />
        {/* <OrbitControls /> */}
        <Environment preset="sunset" />
        <ScrollControls pages={1}>
          <Experience />
        </ScrollControls>

        <EffectComposer>
          <Bloom
            mipmapBlur
            levels={1}
            intensity={0.1}
            luminanceThreshold={1}
            luminanceSmoothing={1}
          />
          <Noise opacity={0.07} />
          <ChromaticAberration radialModulation={true} modulationOffset={-1} />
          <DepthOfField focusDistance={1.2} focalLength={3} bokehScale={30} />
          <Vignette offset={0.5} darkness={0.5} />
        </EffectComposer>
      </Canvas>
    </main>
  );
}
