import { useProgress } from '@react-three/drei'
import { motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

const IntroScreen = ({ onFinish }: { onFinish: () => void }) => {
	const { active, progress } = useProgress()
	const [lettersVisible, setLettersVisible] = useState(false)

	const letters = ['D', 'E', 'V', 'A', 'L', 'E', 'X']

	const container: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	}

	const item: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] },
		},
	}

	useEffect(() => {
		const timer = setTimeout(() => setLettersVisible(true), 100)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (!active) {
			const timeout = setTimeout(() => onFinish(), 1650)
			return () => clearTimeout(timeout)
		}
	}, [active, onFinish])

	return (
		<motion.div
			className='fixed inset-0 flex flex-col items-center justify-center bg-background light:bg-base z-50'
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
		>
			<motion.div
				className='text-5xl font-texts font-semibold tracking-[0.3em] flex gap-2'
				variants={container}
				initial='hidden'
				animate={lettersVisible ? 'visible' : 'hidden'}
			>
				{letters.map((letter, index) => (
					<motion.span key={index} variants={item}>
						{letter}
					</motion.span>
				))}
			</motion.div>

			<div className='flex items-center justify-center text-white'>
				<div className='fixed bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-1 bg-white/20 overflow-hidden rounded-full'>
					<motion.div
						className='h-full bg-base light:bg-primary'
						initial={{ width: 0 }}
						animate={{ width: `${progress}%` }}
						transition={{ ease: 'easeOut', duration: 0.3 }}
					/>
				</div>
			</div>
		</motion.div>
	)
}

export default IntroScreen
