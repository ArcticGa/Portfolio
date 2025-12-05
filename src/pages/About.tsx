import { motion, type Variants } from 'framer-motion'
import InfoBlockPage from '../components/BaseComponents/InfoBlockPage'
import PagesMainSection from '../components/BaseComponents/PagesMainSection'
import { useTranslate } from '../hooks/useTranslate'
import MagicBento from '../reactbits/MagicBento'

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
	},
}

const About = () => {
	const t = useTranslate()

	return (
		<div className='relative'>
			<PagesMainSection
				startText='aboutStartText'
				title='aboutTitle'
				description='aboutDescription'
				image='bgAbout.avif'
			/>

			<InfoBlockPage
				numberBlock='01'
				title='about'
				secondTitle='aboutTitleAboutMe'
				text='aboutTextAboutMe'
			/>

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

				<hr className='absolute left-[48%] -bottom-30 w-16 h-0.5 bg-hr-info text-hr-info rotate-90 max-md:hidden' />
			</motion.div>

			{/* <FooterPages /> */}
		</div>
	)
}

export default About
