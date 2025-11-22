import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ModelFox from './ModelAxolotl'

const SceneAxolotl = () => {
	return (
		<Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
			<ambientLight intensity={1} />
			<directionalLight position={[5, 5, 5]} intensity={1.2} />
			<Environment files='/public/hdr/venice_sunset_1k.hdr' />

			<ModelFox />

			<OrbitControls enablePan={false} enableZoom={false} />
		</Canvas>
	)
}

export default SceneAxolotl
