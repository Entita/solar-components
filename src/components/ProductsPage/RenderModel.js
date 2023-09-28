import React from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment } from "@react-three/drei"
import ReactGA from 'react-ga4'

export default function RenderModel({ model }) {
  return (
    <>
      <Canvas shadows camera={{ position: [-2, 1, -3.8], fov: 45 }} onClick={() => ReactGA.event({ action: model, category: 'products' })}>
        <Environment preset='sunset' resolution={256} blur={1} />
        <Model model={model} /> 
        <OrbitControls autoRotate autoRotateSpeed={0.5} maxDistance={5} minDistance={1.5} enableZoom minZoom={.1} maxZoom={2} enablePan={false} />
      </Canvas>
    </>
  )
}

function Model({ model }) {
  const { nodes } = useGLTF(`/models/${model}.gltf`)

  return (
    <>
      <group>
        {Object.values(nodes).filter(node => node.isMesh).map((node, index) =>
          <mesh key={index} {...adjustments[model]} receiveShadow castShadow geometry={node.geometry} material={node.material} />
        )}
      </group>
    </>
  )
}

const adjustments = {
  'hak': {
    scale: 0.0125,
    position: [0.1, -0.35, -0.8],
  },
  'M10_hex': {
    scale: 0.05,
    position: [0, -0.1, 1],
  },
  'M10_valcova': {
    scale: 0.05,
    position: [0, -0.1, 1],
  },
  'M10_valcova_25': {
    scale: 0.05,
    position: [0, -0.1, 1],
  },
  'M10': {
    scale: 0.05,
    position: [0, -0.1, 0.25],
  },
  'nut': {
    scale: 0.075,
  },
  'omega': {
    scale: 0.04,
    position: [-0.5, -0.8, -0.25],
  },
  'z': {
    scale: 0.03,
    position: [-0.25, -0.55, 0.5],
  },
}