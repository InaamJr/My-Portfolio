import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshTransmissionMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { useNavigate } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

const Sphere = ({ mouse }) => {
  const sphereRef = useRef();
  const particlesRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // Animation logic
  useFrame((state, delta) => {
    if (sphereRef.current) {
      // Tilt on hover
      const targetRotationX = hovered ? -mouse.y * 0.3 : 0;
      const targetRotationY = hovered ? mouse.x * 0.3 : 0;
      sphereRef.current.rotation.x = THREE.MathUtils.lerp(
        sphereRef.current.rotation.x,
        targetRotationX,
        0.1
      );
      sphereRef.current.rotation.y = THREE.MathUtils.lerp(
        sphereRef.current.rotation.y,
        targetRotationY,
        0.1
      );

      // Scale on click
      const targetScale = clicked ? 1.2 : 1;
      sphereRef.current.scale.setScalar(
        THREE.MathUtils.lerp(sphereRef.current.scale.x, targetScale, 0.1)
      );
    }

    if (particlesRef.current) {
      // Orbit particles
      particlesRef.current.rotation.y += delta * 0.2;
      // Pulse effect
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 2) * 0.1;
      particlesRef.current.scale.setScalar(scale);
    }
  });

  // Particle burst on click
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Reset scale after 200ms
    navigate('/projects');
  };

  // Generate random particle positions
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 2 + Math.random() * 0.5;
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  return (
    <group>
      {/* Main Sphere */}
      <mesh
        ref={sphereRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <sphereGeometry args={[1.5, 32, 32]} />
        <MeshTransmissionMaterial
          color="#0a0a0a"
          transmission={0.95}
          thickness={0.2}
          roughness={0.1}
          ior={1.5}
          emissive="#38bdf8" // Matches sky-400
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      
      {/* Orbiting Particles */}
      <Points ref={particlesRef} positions={positions}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.05}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      <Html center>
        <div className="text-white text-sm font-medium pointer-events-none">
          Click to view projects
        </div>
      </Html>
    </group>
  );
};

const ThreeDCard = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Normalize mouse position to [-1, 1]
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  return (
    <div className="w-full h-full three-d-container" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Sphere mouse={mouse} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
          <DepthOfField focusDistance={0.1} focalLength={0.2} bokehScale={2} />
        </EffectComposer>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDCard;