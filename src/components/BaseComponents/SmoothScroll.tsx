import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect, useRef, type ReactNode } from 'react'

interface SmoothScrollProps {
	children: ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
	const scrollRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!scrollRef.current) return

		const lenis = new Lenis({
			lerp: 0.08,
		})

		const onFrame = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(onFrame)
		}

		requestAnimationFrame(onFrame)

		return () => {
			lenis.destroy()
		}
	}, [])

	return <div ref={scrollRef}>{children}</div>
}

export default SmoothScroll
