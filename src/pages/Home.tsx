import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import InfoSection from '../components/HomeComponents/InfoSection/InfoSection'
import MainSection from '../components/HomeComponents/MainSection/MainSection'
import Particles from '../reactbits/Particles'
import { setScene } from '../redux/slices/scenesSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'

const Home = () => {
	const dispatch = useAppDispatch()
	const { scene } = useAppSelector(state => state.scenesSlice)
	const prevScene = useRef(scene)

	const isScrolling = useRef(false)
	const startY = useRef(0)

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	// Desktop Scroll
	const handleWheel = (e: WheelEvent) => {
		if (isScrolling.current) return
		if (scene === 1) return

		if (e.deltaY > 0) {
			isScrolling.current = true
			dispatch(setScene(1))
			localStorage.setItem('scene', '1')

			setTimeout(() => {
				isScrolling.current = false
			}, 800)
		}
	}

	// Mobile Swap
	const handleTouchStart = (e: TouchEvent) => {
		startY.current = e.touches[0].clientY
	}

	const handleTouchMove = (e: TouchEvent) => {
		if (isScrolling.current) return
		if (scene === 1) return

		const delta = startY.current - e.touches[0].clientY

		if (delta > 50) {
			isScrolling.current = true

			dispatch(setScene(1))
			localStorage.setItem('scene', '1')

			setTimeout(() => {
				isScrolling.current = false
			}, 800)
		}
	}

	useEffect(() => {
		// desktop
		window.addEventListener('wheel', handleWheel, { passive: true })

		// mobile
		window.addEventListener('touchstart', handleTouchStart, { passive: true })
		window.addEventListener('touchmove', handleTouchMove, { passive: true })

		return () => {
			window.removeEventListener('wheel', handleWheel)
			window.removeEventListener('touchstart', handleTouchStart)
			window.removeEventListener('touchmove', handleTouchMove)
		}
	}, [scene])

	const direction = scene > prevScene.current ? 1 : -1
	prevScene.current = scene

	const variants: Variants = {
		hidden: (dir: number) => ({
			opacity: 0,
			y: dir > 0 ? 60 : -60,
		}),
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: 'easeOut' },
		},
		exit: (dir: number) => ({
			opacity: 0,
			y: dir > 0 ? -60 : 60,
			transition: { duration: 0.4, ease: 'easeOut' },
		}),
	}

	return (
		<main>
			<div className='absolute top-0 left-0 w-full h-screen select-none pointer-events-none'>
				<Particles
					particleColors={['#7e00e6']}
					particleCount={600}
					particleSpread={10}
					speed={0.1}
					particleBaseSize={50}
					alphaParticles={false}
					disableRotation={false}
				/>
			</div>

			<div className='px-container max-2xl:px-container-2xl max-xl:px-container-xl max-lg:px-container-lg max-sm:px-container-sm'>
				<AnimatePresence mode='wait' custom={direction}>
					{scene === 0 && (
						<motion.div
							key='scene1'
							custom={direction}
							variants={variants}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							<MainSection />
						</motion.div>
					)}
					{scene === 1 && (
						<motion.div
							key='scene2'
							custom={direction}
							variants={variants}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							<InfoSection />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</main>
	)
}

export default Home
