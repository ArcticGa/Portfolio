import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import MainSection from '../components/HomeComponents/MainSection/MainSection'

const Home = () => {
	const [scene, setScene] = useState(0)
	const navigate = useNavigate()

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	const handleScroll = (e: WheelEvent) => {
		if (e.deltaY > 0) setScene(1)
		if (e.deltaY < 0) setScene(0)
	}

	useEffect(() => {
		window.addEventListener('wheel', handleScroll, { passive: false })
		return () => window.removeEventListener('wheel', handleScroll)
	}, [])

	return (
		<main>
			<div className='px-24 max-xl:px-18 max-lg:px-14 max-sm:px-8'>
				<AnimatePresence>
					{scene === 0 && (
						<motion.div
							key='scene1'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -40 }}
							transition={{ duration: 0.6 }}
						>
							<MainSection />
						</motion.div>
					)}
					{scene === 1 && (
						<motion.div
							key='scene2'
							className='flex flex-col gap-6 text-3xl font-bold'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -40 }}
							transition={{ duration: 0.6 }}
						>
							Aboba
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</main>
	)
}

export default Home
