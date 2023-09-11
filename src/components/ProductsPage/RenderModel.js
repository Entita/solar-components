import React from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, useTexture, Environment } from "@react-three/drei"

export default function RenderModel({ model }) {

  return (
    <>
      <Canvas shadows camera={{ position: [-2, 1, -3.8], fov: 45 }}>
        <Environment preset='sunset' resolution={256} blur={1} />
        <Model model={model} /> 
        <OrbitControls maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.5} maxDistance={5} minDistance={1.5} enableZoom minZoom={.1} maxZoom={2} enablePan={false} />
      </Canvas>
    </>
  )
}

function Model({ model }) {
  const { nodes } = useGLTF(`/models/${model}.gltf`)
  const material = adjustments[model].material
  const textures = useTexture({ 
    map: `/models/${material}_color.png`,
    roughnessMap: `/models/${material}_roughness.png`,
    metalnessMap: `/models/${material}_metalness.png`,
    normalMap: `/models/${material}_normal.png`,
  })

  return (
    <>
      <group>
        {Object.values(nodes).filter(node => node.isMesh).map((node, index) =>
          <mesh key={index} {...adjustments[model]} receiveShadow castShadow geometry={node.geometry}>
            <meshStandardMaterial metalness={1} roughness={1} {...textures} />
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
    material: `metal`,
  },
  'cepicnik': {
    scale: 0.05,
    position: [0, -0.1, 0.5],
    material: `metal`,
  },
  'M10_hex': {
    scale: 0.05,
    position: [0, -0.1, 1],
    material: `metal`,
  },
  'M10_valcova': {
    scale: 0.05,
    position: [0, -0.1, 1],
    material: `metal`,
  },
  'M10_valcova_25': {
    scale: 0.05,
    position: [0, -0.1, 1],
    material: `metal`,
  },
  'M10': {
    scale: 0.05,
    position: [0, -0.1, 0.25],
    material: `metal`,
  },
  'omega': {
    scale: 0.04,
    position: [-0.5, -0.8, -0.25],
    material: `metal`,
  },
  'z': {
    scale: 0.03,
    position: [-0.25, -0.55, 0.5],
    material: `metal`,
  },
}