import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import type { translations } from '../../locales'
import { useAppSelector } from '../../redux/store'
import ClosePageBtn from './ClosePageBtn'

type PagesMainSectionProps = {
	startText: keyof typeof translations.en
	title: keyof typeof translations.en
	description: keyof typeof translations.en
	image: string
}

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
	},
}

const PagesMainSection = ({
	startText,
	title,
	description,
	image,
}: PagesMainSectionProps) => {
	const { theme } = useAppSelector(state => state.headerSlice)

	const [isMobile, setIsMobile] = useState(window.innerWidth < 770)

	const { scrollYProgress } = useScroll()

	const scale = useTransform(scrollYProgress, [0, 0.75], [1, 1.3])
	const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

	const t = useTranslate()

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 770)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<>
			<motion.div
				style={{
					scale,
					opacity,
					backgroundImage: `linear-gradient(
          rgba(${theme === 'dark' ? '5, 0, 13,' : '245, 242, 235,'} ${
						isMobile ? '0.8' : '0'
					}),
          rgba(${theme === 'dark' ? '5, 0, 13,' : '245, 242, 235,'} ${
						isMobile ? '0.8' : '0'
					})
        ), url('/images/${image}')`,
				}}
				className='absolute top-0 right-0 w-[65%] h-[calc(100vh-105px-16px)] bg-no-repeat bg-cover origin-center max-xl:w-full max-md:w-[95%] max-sm:w-[175%]'
			/>

			<ClosePageBtn />

			<div className='flex items-center h-[calc(100vh-105px-16px)] overflow-hidden px-50 max-2xl:px-20 max-xl:px-10 max-lg:px-8'>
				<div className='flex-1/2 relative text-sm max-md:flex-2/3 max-sm:flex-1'>
					<motion.div
						variants={fadeUpVariant}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
					>
						{t(startText)}
					</motion.div>

					<motion.div
						variants={fadeUpVariant}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						className='text-7xl font-bold py-6 max-sm:text-5xl'
					>
						{t(title)}
					</motion.div>

					<motion.div
						variants={fadeUpVariant}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
					>
						{t(description)}
					</motion.div>
					<div className='absolute w-full h-[300px] border-t border-r mt-12 rounded-tr-[70px]' />
				</div>

				<div className='flex-1/2 max-md:flex-1/3 max-sm:flex-none' />
			</div>
		</>
	)
}

export default PagesMainSection
