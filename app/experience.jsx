import React, { useLayoutEffect } from "react";
import React, { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Box,
  Environment,
  Fisheye,
  OrbitControls,
  ScrollControls,
  Svg,
  Text,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { data } from "./shaderData";
import gsap from "gsap";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
// import logo from "@/public/next.svg";
const Experience = () => {
  const meshesRef = useRef();
  const tl = useRef();
  const scroll = useScroll();
  //   const targetPosition = new THREE.Vector3(5, 2, 10);

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      meshesRef.current.position,
      {
        duration: 2,
        z: 30,
      },
      0
    );

    tl.current.to(
      meshesRef.current.rotation,
      {
        duration: 2,
        z: Math.PI / 2,
      },
      0
    );
  }, []);

  return (
    <group ref={meshesRef}>
      <mesh position={[0, 0, 0]}>
        <planeGeometry attach="geometry" args={[10, 10, 10]} />
        <NodeToyMaterial data={data} />
      </mesh>
      <mesh position={[0, 0, -5]}>
        <planeGeometry attach="geometry" args={[10, 10, 10]} />
        <NodeToyMaterial data={data} />
      </mesh>
      <mesh position={[0, 0, -10]}>
        <planeGeometry attach="geometry" args={[10, 10, 10]} />
        <NodeToyMaterial data={data} />
      </mesh>
      <mesh position={[0, 0, -15]}>
        <planeGeometry attach="geometry" args={[10, 10, 10]} />
        <NodeToyMaterial data={data} />
      </mesh>
      <mesh position={[0, 0, -20]}>
        <planeGeometry attach="geometry" args={[10, 10, 10]} />
        <NodeToyMaterial data={data} />
      </mesh>
      <mesh position={[0, 0, -25]} scale={1}>
        <planeGeometry attach="geometry" args={[10, 10, 10]} />
        <NodeToyMaterial opacity={0.5} data={data} />
      </mesh>
      <mesh position={[0, 0, -24]} scale={10}>
        <planeGeometry attach="geometry" args={[10, 10, 10]} />
        <meshBasicMaterial
          opacity={0.99}
          color={"#050505"}
          //   metalness={1}
          transparent={true}
          roughness={1}
        />
      </mesh>
      {/* <Text
        color="#fff"
        fontSize={1}
        position={[0, 0, -23]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        xleron
      </Text> */}
      <Svg
        src={"/xleron_light.svg"}
        fillMaterial={{ color: "#ffffff", opacity: 1, envMapIntensity: 1 }}
        scale={0.0015}
        position={[0.3, 1.3, -23]}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  );
};

export default Experience;
