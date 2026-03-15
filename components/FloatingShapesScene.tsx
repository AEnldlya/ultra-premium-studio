'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedShapeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  type?: 'icosahedron' | 'octahedron' | 'tetrahedron' | 'torus';
}

function AnimatedShape({ position, color, scale = 1, speed = 1, type = 'icosahedron' }: AnimatedShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    switch (type) {
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(1, 0);
      case 'octahedron':
        return new THREE.OctahedronGeometry(1, 0);
      case 'tetrahedron':
        return new THREE.TetrahedronGeometry(1, 0);
      case 'torus':
        return new THREE.TorusGeometry(0.7, 0.3, 16, 100);
      default:
        return new THREE.IcosahedronGeometry(1, 0);
    }
  }, [type]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          distort={0.4}
          speed={3}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} color="#c9a962" intensity={0.3} />
      
      <AnimatedShape position={[-3, 1, 0]} color="#c9a962" scale={0.6} speed={0.8} type="icosahedron" />
      <AnimatedShape position={[3, -0.5, -2]} color="#e8d5a3" scale={0.5} speed={1} type="octahedron" />
      <AnimatedShape position={[-2, -1.5, -1]} color="#9a7b3d" scale={0.4} speed={1.2} type="tetrahedron" />
      <AnimatedShape position={[2.5, 1.5, -1]} color="#c9a962" scale={0.5} speed={0.9} type="torus" />
    </>
  );
}

export function FloatingShapesScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
