'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function RotatingIcosahedron() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.1;

      // React to mouse movement
      const { mouse } = state;
      meshRef.current.rotation.x += mouse.y * 0.01;
      meshRef.current.rotation.y += mouse.x * 0.01;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial
        color="#A855F7"
        wireframe
        transparent
        opacity={0.3}
      />
    </Icosahedron>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingIcosahedron />
      </Canvas>
    </div>
  );
}