'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: React.ReactNode;
  color: string;
  speed?: number;
  scale?: number;
}

function FloatingGeometry({ position, geometry, color, speed = 1, scale = 1 }: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const shapes = useMemo(() => [
    { geometry: <icosahedronGeometry args={[1, 0]} />, position: [-4, 0, -2] as [number, number, number], color: '#c9a962', scale: 0.8, speed: 0.8 },
    { geometry: <octahedronGeometry args={[1, 0]} />, position: [4, 1, -3] as [number, number, number], color: '#e8d5a3', scale: 0.6, speed: 1.2 },
    { geometry: <tetrahedronGeometry args={[1, 0]} />, position: [-2, 2, -4] as [number, number, number], color: '#9a7b3d', scale: 0.5, speed: 1 },
    { geometry: <dodecahedronGeometry args={[1, 0]} />, position: [3, -1, -2] as [number, number, number], color: '#c9a962', scale: 0.7, speed: 0.9 },
    { geometry: <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />, position: [0, -2, -3] as [number, number, number], color: '#e8d5a3', scale: 0.5, speed: 0.7 },
    { geometry: <sphereGeometry args={[0.8, 32, 32]} />, position: [-3, -1, -1] as [number, number, number], color: '#9a7b3d', scale: 0.4, speed: 1.1 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#c9a962" intensity={0.5} />
      
      {shapes.map((shape, index) => (
        <FloatingGeometry
          key={index}
          position={shape.position}
          geometry={shape.geometry}
          color={shape.color}
          scale={shape.scale}
          speed={shape.speed}
        />
      ))}
      
      <Environment preset="city" />
    </>
  );
}

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
