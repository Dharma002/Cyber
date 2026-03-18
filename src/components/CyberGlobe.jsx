import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const GlobeModel = () => {
  const groupRef = useRef();
  const dotsRef = useRef();

  // Dots array generation
  const particles = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 2500; i++) { // Dots thode badha diye hain photo jaisa dense look ke liye
      const phi = Math.acos(-1 + (2 * i) / 2500);
      const theta = Math.sqrt(2500 * Math.PI) * phi;
      const vector = new THREE.Vector3().setFromSphericalCoords(2.1, phi, theta);
      pts.push(vector.x, vector.y, vector.z);
    }
    return new Float32Array(pts);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    dotsRef.current.rotation.y = t * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* 1. Deep Dark Core (Photo jaisa background) */}
      <Sphere args={[2, 64, 64]}>
        <meshBasicMaterial color="#00020a" /> 
      </Sphere>

      {/* 2. Outer Glow Aura (Halki chamak globe ke peeche) */}
      <Sphere args={[2.02, 64, 64]}>
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.05} side={THREE.BackSide} />
      </Sphere>

      {/* 3. Connection Lines (Wireframe photo jaisa) */}
      <Sphere args={[2.08, 35, 35]}>
        <meshPhongMaterial 
          color="#22d3ee" 
          wireframe 
          transparent 
          opacity={0.15} 
          emissive="#22d3ee"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* 4. Glowing Dots (True Cyan Glow) */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.045} 
          color="#22d3ee" 
          transparent 
          opacity={1} 
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending} // Isse dots light ki tarah chamkenge
        />
      </points>

      {/* 5. Orbiting Rings (Cyan & Pink from image) */}
      {[0, 1].map((i) => (
        <mesh key={i} rotation={[Math.PI / (i + 1.2), Math.PI / (i + 2), 0]}>
          <torusGeometry args={[2.6 + i * 0.2, 0.006, 16, 100]} />
          <meshBasicMaterial 
            color={i === 1 ? "#f472b6" : "#22d3ee"} 
            transparent 
            opacity={0.5} 
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

const CyberGlobe = () => {
  return (
    <div className="w-full h-full min-h-[450px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        {/* Lights adjusted for exact photo colors */}
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={3} color="#22d3ee" />
        <pointLight position={[-5, -5, -5]} intensity={2} color="#0ea5e9" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <GlobeModel />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
};

export default CyberGlobe;