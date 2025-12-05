import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const Model = ({ isIntroDone }: { isIntroDone: boolean }) => {
	const groupRef = useRef<THREE.Group>(null)
	const { scene } = useGLTF('/models/nina.glb')

	useFrame(() => {
		if (isIntroDone && groupRef.current) {
			groupRef.current.rotation.y -= 0.003
		}
	})

	return (
		<group ref={groupRef} rotation={[0, 0, 0]} position={[0, 0, 0]} scale={2.3}>
			<primitive object={scene} />
		</group>
	)
}

export default Model
