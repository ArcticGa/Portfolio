import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import Model from './Model'

function CameraRig({ isIntroDone }: { isIntroDone: boolean }) {
	useFrame(state => {
		const cam = state.camera

		if (!isIntroDone) {
			cam.position.lerp(new THREE.Vector3(0, 0, 3), 0.02)
		} else {
			cam.position.lerp(cam.position, 0.8)
		}

		cam.lookAt(0, 0, 0)
	})

	return null
}

export default function Scene() {
	const [isIntroDone, setIsIntroDone] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => setIsIntroDone(true), 2000)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<Canvas camera={{ position: [0, 20, 40], fov: 50 }}>
			<ambientLight intensity={1} />
			<directionalLight position={[5, 5, 5]} intensity={1.2} />
			<Environment files='/public/hdr/venice_sunset_1k.hdr' />

			<Model isIntroDone={isIntroDone} />

			<CameraRig isIntroDone={isIntroDone} />
			<OrbitControls
				enableZoom={false}
				enablePan={false}
				enabled={isIntroDone}
			/>
		</Canvas>
	)
}
