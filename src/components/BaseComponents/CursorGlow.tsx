import { useEffect, useState } from 'react'

const CursorGlow = () => {
	const [pos, setPos] = useState({ x: -100, y: -100 })

	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			setPos({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', handleMove)
		return () => window.removeEventListener('mousemove', handleMove)
	}, [])

	return (
		<div
			className='pointer-events-none fixed top-0 left-0 z-50'
			style={{
				transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
			}}
		>
			<div className='w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(130,0,255,0.25)_0%,transparent_70%)] blur-3xl' />
		</div>
	)
}

export default CursorGlow
