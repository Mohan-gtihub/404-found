'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedStars = () => {
  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
     <Stars ref={ref} radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
  );
};


export default function HeroScene() {

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedStars />
      </Canvas>
    </div>
  );
}
