import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslate } from '../../../hooks/useTranslate'
import { skillsList } from '../../../utils/arrays'

const Text = () => {
	const [index, setIndex] = useState(0)
	const t = useTranslate()

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % skillsList.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	const variants = {
		enter: { x: 120, opacity: 1 },
		center: { x: 0, opacity: 1 },
		exit: { x: -120, opacity: 1 },
	}

	const mainVariants: Variants = {
		hidden: { y: 50, opacity: 0, rotate: 1 },
		visible: {
			y: 0,
			opacity: 1,
			rotate: 0,
			transition: { duration: 0.4, ease: 'easeInOut', delay: 0.5 },
		},
	}

	return (
		<div className='flex-1 flex flex-col items-start justify-center pb-16 pl-22 max-lg:items-center max-lg:justify-start max-lg:p-0'>
			<motion.div
				className='max-w-35 w-full text-center overflow-hidden rounded-md bg-base text-primary light:bg-primary light:text-base'
				initial='hidden'
				animate='visible'
				variants={mainVariants}
			>
				<AnimatePresence mode='wait'>
					<motion.div
						key={skillsList[index]}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{ duration: 1 }}
					>
						{skillsList[index]}
					</motion.div>
				</AnimatePresence>
			</motion.div>
			<motion.h1
				className='font-texts text-6xl my-10 font-bold max-lg:my-5 max-lg:text-center max-sm:text-5xl'
				initial='hidden'
				animate='visible'
				variants={mainVariants}
			>
				<div className='mb-1'>{t('name')}</div>
				<div>{t('nickname')}</div>
			</motion.h1>
			<motion.p
				className='max-w-130 max-h-20 h-full text-gray light:text-primary max-lg:text-center max-lg:max-h-max max-sm:text-sm'
				initial='hidden'
				animate='visible'
				variants={mainVariants}
			>
				{t('welcome')}
			</motion.p>
		</div>
	)
}

export default Text
