'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, MeshDistortMaterial, Ring } from '@react-three/drei'
import * as THREE from 'three'

function PlanetGroup() {
  const groupRef  = useRef<THREE.Group>(null)
  const planetRef = useRef<THREE.Mesh>(null)
  const atmosRef  = useRef<THREE.Mesh>(null)

  useFrame(state => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.45) * 0.16
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.mouse.y * 0.22, 0.04)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.22, 0.04)
    }
    if (planetRef.current) planetRef.current.rotation.y += 0.004
    if (atmosRef.current) {
      atmosRef.current.rotation.y -= 0.002
      atmosRef.current.rotation.x += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {/* Inner bright core */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff" emissive="#F57799" emissiveIntensity={2}
          transparent opacity={0.9}
        />
      </mesh>

      {/* Abstract wireframe globe */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#F57799" emissive="#FDC3A1" emissiveIntensity={0.6}
          wireframe transparent opacity={0.35}
        />
      </mesh>

      {/* Outer atmosphere glow */}
      <mesh ref={atmosRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#F57799" transparent opacity={0.12}
          side={THREE.BackSide} emissive="#F57799" emissiveIntensity={1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Ring 1 — pink */}
      <Ring args={[2.05, 3.1, 128]} rotation={[Math.PI * 0.42, 0.18, 0]}>
        <meshStandardMaterial
          color="#F57799" transparent opacity={0.55}
          side={THREE.DoubleSide} emissive="#F57799" emissiveIntensity={1.2}
        />
      </Ring>

      {/* Ring 2 — peach */}
      <Ring args={[2.3, 2.55, 128]} rotation={[Math.PI * 0.38, -0.08, 0.04]}>
        <meshStandardMaterial
          color="#FDC3A1" transparent opacity={0.45}
          side={THREE.DoubleSide} emissive="#FDC3A1" emissiveIntensity={1.0}
        />
      </Ring>
    </group>
  )
}

export default function SpacePlanet() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.6} color="#F0D0C0" />
      <pointLight position={[5, 5, 5]}   intensity={2.0} color="#F57799" />
      <pointLight position={[-6, -4, -4]} intensity={1.1} color="#FDC3A1" />
      <pointLight position={[0, -4, 3]}   intensity={0.4} color="#6c2fff" />

      <Stars radius={100} depth={50} count={2200} factor={4} saturation={0} fade speed={0.5} />

      <Suspense fallback={null}>
        <PlanetGroup />
      </Suspense>
    </Canvas>
  )
}
