import React from 'react'
import { DoubleSide } from 'three'
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"

export default function RenderModel({ model }) {
  return (
    <>
      <Canvas shadows camera={{ position: [-1, 0.5, -3.8], fov: 45 }}>
        <color attach='background' args={['lightgrey']} />
        <hemisphereLight intensity={0.15} />
        <spotLight color='white' position={[0, 3.5, 0]} decay={0.5} intensity={1} penumbra={1} angle={Math.PI / 6} castShadow />
        <Ground />
        <Model model={model} />
        <OrbitControls maxPolarAngle={Math.PI / 1.8} autoRotate autoRotateSpeed={0.35} maxDistance={5} minDistance={1.5} enableZoom minZoom={.1} maxZoom={2} enablePan={false} />
      </Canvas>
    </>
  )
}

function Ground() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshPhongMaterial color={'white'} side={DoubleSide} />
    </mesh>
  )
}

function Model({ model }) {
  const ref = React.useRef()
  const { nodes } = useGLTF(`models/${model}.gltf`)

  return (
    <>
      <group ref={ref} position={[0, -0.75, 0]}>
        {Object.values(nodes).filter(node => node.isMesh).map((node, index) =>
          <mesh key={index} {...adjustments[model]} receiveShadow castShadow geometry={node.geometry}>
            <meshStandardMaterial color='silver' metalness={0.5} roughness={0.4} />
          </mesh>
        )}
      </group>
    </>
  )
}

const adjustments = {
  'hak': {
    scale: 0.0125,
    position: [0.1, 0, -0.8],
  },
  'cepicnik': {
    scale: 0.05,
    position: [0, 0.25, 0.5],
  },
  'M10_hex': {
    scale: 0.05,
    position: [0, 0.25, 1],
  },
  'M10_valcova': {
    scale: 0.05,
    position: [0, 0.25, 1],
  },
  'M10_valcova_25': {
    scale: 0.05,
    position: [0, 0.25, 1],
  },
  'M10': {
    scale: 0.05,
    position: [0, 0.25, 0.25],
  },
  'omega': {
    scale: 0.04,
    position: [-0.5, -0.2, -0.25],
  },
  'z': {
    scale: 0.03,
    position: [-0.25, -0.2, 0.5],
  },
}
