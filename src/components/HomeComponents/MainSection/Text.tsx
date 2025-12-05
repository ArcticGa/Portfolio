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
		hidden: { opacity: 0, y: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 },
		},
	}

	return (
		<div className='relative flex-1 max-sm:flex-1/4 max-sm:mt-4 flex flex-col items-start justify-center pb-22 max-lg:items-center max-lg:justify-start max-lg:p-0'>
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
				className='font-texts text-6xl my-10 font-bold max-lg:my-5 max-lg:text-center max-sm:text-5xl max-sm:my-3 text-base light:text-primary'
				initial='hidden'
				animate='visible'
				variants={mainVariants}
			>
				<div className='mb-1'>{t('name')}</div>
				<div>{t('nickname')}</div>
			</motion.h1>
			<motion.p
				className='max-w-130 text-gray light:text-primary max-lg:text-center max-lg:max-h-max max-sm:text-sm'
				initial='hidden'
				animate='visible'
				variants={mainVariants}
			>
				{t('welcome')}
			</motion.p>

			<div className='absolute bottom-20 left-0 w-1 h-20 overflow-hidden flex flex-col items-center max-lg:hidden'>
				<motion.div
					className='w-0.5 h-6 bg-base light:bg-primary rounded'
					initial={{ y: 80 }}
					animate={{ y: -30 }}
					transition={{
						duration: 1.7,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>
		</div>
	)
}

export default Text
