import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import ClosePageBtn from '../components/BaseComponents/ClosePageBtn'
import FooterPages from '../components/BaseComponents/FooterPages'
import { useTranslate } from '../hooks/useTranslate'
import MagicBento from '../reactbits/MagicBento'
import { useAppSelector } from '../redux/store'

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
	},
}

const About = () => {
	const { theme } = useAppSelector(state => state.headerSlice)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 770)

	const t = useTranslate()
	const { scrollYProgress } = useScroll()

	const scale = useTransform(scrollYProgress, [0, 0.75], [1, 1.3])
	const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 770)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className='relative'>
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
        ), url('/public/images/bgAbout.png')`,
				}}
				className='absolute top-0 right-0 w-[70%] h-[calc(100vh-105px-16px)] bg-no-repeat bg-cover origin-center max-xl:w-full max-md:w-[95%] max-sm:w-[175%]'
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
						{t('aboutStartText')}
					</motion.div>

					<motion.div
						variants={fadeUpVariant}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						className='text-7xl font-bold py-6 max-sm:text-5xl'
					>
						{t('aboutTitle')}
					</motion.div>

					<motion.div
						variants={fadeUpVariant}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
					>
						{t('aboutDescription')}
					</motion.div>
					<div className='absolute w-full h-[300px] border-t border-r mt-12 rounded-tr-[70px]' />
				</div>

				<div className='flex-1/2 max-md:flex-1/3 max-sm:flex-none' />
			</div>
			<div className='flex mt-16 mb-28 px-50 max-2xl:px-20 max-xl:px-10 max-lg:px-8 max-md:flex-col'>
				<motion.div
					variants={fadeUpVariant}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					className='flex-1 pr-14 flex items-center justify-between text-4xl font-bold max-md:mb-8 max-md:pr-0'
				>
					<div className='text-6xl font-light'>01</div>
					<div>{t('about')}</div>
				</motion.div>

				<motion.div
					variants={fadeUpVariant}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					className='flex-1 pl-14 border-l-2 border-[#3a3a3a] max-md:border-l-0 max-md:border-t-2 max-md:pl-0 max-md:pt-8'
				>
					<div className='text-2xl font-bold mb-4'>
						{t('aboutTitleAboutMe')}
					</div>
					<div>{t('aboutTextAboutMe')}</div>
				</motion.div>
			</div>

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='text-center text-6xl font-bold mb-22'
			>
				{t('aboutSkillsAndProjectsTitle')}
			</motion.div>

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='mb-42 max-md:mb-12 relative'
			>
				<MagicBento
					enableSpotlight={true}
					enableBorderGlow={true}
					enableTilt={false}
					enableMagnetism={false}
					clickEffect={true}
					spotlightRadius={300}
					particleCount={40}
					glowColor='132, 0, 255'
				/>

				<hr className='absolute left-[48%] -bottom-30 w-16 h-0.5 bg-[#3b3b3b] text-[#3b3b3b] rotate-90 max-md:hidden' />
			</motion.div>

			<FooterPages />
		</div>
	)
}

export default About
