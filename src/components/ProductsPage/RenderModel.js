import React from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, useTexture } from "@react-three/drei"

export default function RenderModel({ model }) {
  return (
    <>
      <Canvas shadows camera={{ position: [-2, 1, -3.8], fov: 45 }}>
        <hemisphereLight intensity={1} />
        <spotLight color='white' position={[0, 3.5, 0]} decay={0.2} intensity={1} penumbra={1} angle={Math.PI / 6} castShadow />
        <Sphere />
        {/* <Model model={model} />  */}
        <OrbitControls maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.5} maxDistance={5} minDistance={1.5} enableZoom minZoom={.1} maxZoom={2} enablePan={false} />
      </Canvas>
    </>
  )
}

function Sphere() {
 const textures = useTexture({ 
    map: "/models/metal_color.png",
    roughnessMap: "/models/metal_roughness.png",
    metalnessMap: "/models/metal_metalness.png",
    normalMap: "/models/metal_normal.png",
  })

  return (
    <mesh>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial metalness={0.8} roughness={0.4} {...textures} />
    </mesh>
  )
}

function Model({ model }) {
  const { nodes } = useGLTF(`/models/${model}.gltf`)
  const textures = useTexture({ 
    map: "/models/metal_color.png",
    roughnessMap: "/models/metal_roughness.png",
    metalnessMap: "/models/metal_metalness.png",
    normalMap: "/models/metal_normal.png",
  })

  return (
    <>
      <group>
        {Object.values(nodes).filter(node => node.isMesh).map((node, index) =>
          <mesh key={index} {...adjustments[model]} receiveShadow castShadow geometry={node.geometry}>
            <meshStandardMaterial metalness={0.4} roughness={0.3} {...textures} />
          </mesh>
        )}
      </group>
    </>
  )
}

const adjustments = {
  'hak': {
    scale: 0.0125,
    position: [0.1, -0.35, -0.8],
    material: `silver`,
  },
  'cepicnik': {
    scale: 0.05,
    position: [0, -0.1, 0.5],
    material: `silver`,
  },
  'M10_hex': {
    scale: 0.05,
    position: [0, -0.1, 1],
    material: `silver`,
  },
  'M10_valcova': {
    scale: 0.05,
    position: [0, -0.1, 1],
    material: `silver`,
  },
  'M10_valcova_25': {
    scale: 0.05,
    position: [0, -0.1, 1],
    material: `silver`,
  },
  'M10': {
    scale: 0.05,
    position: [0, -0.1, 0.25],
    material: `silver`,
  },
  'omega': {
    scale: 0.04,
    position: [-0.5, -0.8, -0.25],
    material: `#848789`,
  },
  'z': {
    scale: 0.03,
    position: [-0.25, -0.55, 0.5],
    material: `silver`,
  },
}