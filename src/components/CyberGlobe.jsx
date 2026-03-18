import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GlobeCore = () => {
  const meshRef = useRef();
  const wireRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.1;
      wireRef.current.rotation.z = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Main Core Sphere - Dark base to merge with background */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial 
          color="#00020a" 
          transparent 
          opacity={0.6} 
        />
      </mesh>

      {/* High-Tech Wireframe - Primary Cyan */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[2.02, 36, 36]} />
        <meshBasicMaterial 
          color="#22d3ee" 
          wireframe 
          transparent 
          opacity={0.2} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Energy Pulse - Distorted Blue */}
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <MeshDistortMaterial
          color="#3b82f6"
          speed={3}
          distort={0.3}
          radius={1}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

const DataParticles = () => {
  const pointsRef = useRef();
  const particleCount = 2000; // Increased density
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color("#22d3ee"); // Matches AnimatedBackground cyan
    const color2 = new THREE.Color("#3b82f6"); // Matches AnimatedBackground blue
    
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      
      const r = 2.05 + Math.abs(Math.sin(i * 0.5)) * 0.15;
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      const mixedColor = new THREE.Color().copy(color1).lerp(color2, Math.abs(Math.sin(i * 0.1)));
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.1;
      // Pulse size based on time
      pointsRef.current.material.size = 0.02 + Math.sin(t * 2) * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
};

const TechRings = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Horizontal Scanning Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <MeshWobbleMaterial 
          color="#22d3ee" 
          speed={2} 
          factor={0.2} 
          transparent 
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Vertical Orbit Ring */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[2.7, 0.005, 16, 100]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

const CyberGlobeV3 = () => {
  return (
    <div className="w-full h-full min-h-[450px] relative bg-transparent">
      {/* Subtle Glow Backdrop inside the container */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 35 }} 
        gl={{ antialias: true, alpha: true }}
        onCreated={(state) => {
          if (state.gl.domElement) {
            state.gl.domElement.style.pointerEvents = 'none';
          }
        }}
      >
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
        <spotLight position={[-5, 5, 5]} angle={0.2} penumbra={1} intensity={1} color="#3b82f6" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <GlobeCore />
          <DataParticles />
          <TechRings />
        </Float>
      </Canvas>
    </div>
  );
};

export default CyberGlobeV3;