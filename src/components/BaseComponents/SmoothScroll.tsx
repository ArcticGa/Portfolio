import 'lenis/dist/lenis.css'
import { useEffect, type ReactNode } from 'react'
import { lenis } from '../../lib/lenis'

interface SmoothScrollProps {
	children: ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
	useEffect(() => {
		const onFrame = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(onFrame)
		}

		requestAnimationFrame(onFrame)

		return () => {
			lenis.destroy()
		}
	}, [])

	return <>{children}</>
}

export default SmoothScroll
