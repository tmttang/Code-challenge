import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from './Model'
import Close from '../../components/Close'

const NotFoundPage = () => {
  return (
    <div className='relative w-full h-screen'>
      <Close />
      <Canvas
        orthographic
        style={{ background: 'black' }}
        camera={{ position: [0, 0, 1], zoom: 800 }}
      >
        <Model />
        <directionalLight intensity={3} position={[0, 0.1, 1]} />
        <Environment preset='city' />
      </Canvas>
    </div>
  )
}
export default NotFoundPage
