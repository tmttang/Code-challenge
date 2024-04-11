import {
  useGLTF,
  Text,
  Float,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Model() {
  const { viewport } = useThree()
  const { nodes } = useGLTF('/shards.glb')

  return (
    <group scale={viewport.width / 1.5}>
      {nodes.Scene.children.map((mesh, i) => {
        return <Mesh data={mesh} key={i} />
      })}
      <Font />
    </group>
  )
}

function Font() {
  const textOption = {
    color: 'white',
    anchorX: 'center',
    anchorY: 'middle',
  }
  return (
    <group>
      <Text position={[0, 0, -0.1]} fontSize={0.4} {...textOption}>
        404
      </Text>
    </group>
  )
}

function Mesh({ data }) {
  const materialProps = {
    thickness: 0.275,
    ior: 1.8,
    chromaticAberration: 0.75,
    resolution: 300,
  }

  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          {...materialProps}
        />
      </mesh>
    </Float>
  )
}
