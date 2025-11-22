import { motion, type Variants } from 'framer-motion'
import FooterPages from '../components/BaseComponents/FooterPages'
import InfoBlockPage from '../components/BaseComponents/InfoBlockPage'
import PagesMainSection from '../components/BaseComponents/PagesMainSection'
import { useTranslate } from '../hooks/useTranslate'
import SpotlightCard from '../reactbits/SpotlightCard'
import StickerPeel from '../reactbits/StickerPeel'
import { devSkills, stickersArray } from '../utils/arrays'

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
	},
}

const Coding = () => {
	const t = useTranslate()

	const baseWidth = 1920
	const scale = window.innerWidth / baseWidth

	return (
		<div className='relative'>
			<PagesMainSection
				startText='codingStartText'
				title='codingTitle'
				description='codingDescription'
				image='bgCoding.png'
			/>

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='text-center text-7xl font-bold my-40 max-lg:my-30 max-sm:my-20'
			>
				{t('codingTitleMainSection')}
			</motion.div>

			<InfoBlockPage
				numberBlock='01'
				title='codingMainInfoBlockTitle'
				secondTitle='codingMainInfoBlockSecondTitle'
				text='codingMainInfoBlockText'
			/>

			<InfoBlockPage secondTitle='codingTechnologiesSecondTitle' />

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: window.innerWidth > 700 ? 0.3 : 0.1 }}
				className='grid grid-cols-5 gap-4 px-50 mb-30 select-none max-lg:grid-cols-3 max-md:grid-cols-1 max-lg:px-20 max-md:px-4'
			>
				{devSkills.map((skill, i) => (
					<SpotlightCard key={i} className='flex flex-col justify-center'>
						<div className='text-xl font-bold mb-2'>{skill.name}</div>
						<div className='text-skill-dark light:text-skill-light'>
							{t(skill.level)}
						</div>
					</SpotlightCard>
				))}
			</motion.div>

			<InfoBlockPage
				numberBlock='02'
				title='codingFrontEndTitle'
				secondTitle='codingFrontEndSecondTitle'
				text='codingFrontEndText'
			/>

			<InfoBlockPage secondTitle='codingReactTitle' text='codingReactText' />

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='relative overflow-hidden h-[500px] mx-50 max-lg:mx-30 max-md:mx-8 max-sm:md-2'
			>
				{stickersArray.map((sticker, i) => (
					<StickerPeel
						key={i}
						imageSrc={sticker.name}
						width={window.innerWidth > 700 ? 100 : 60}
						rotate={0}
						peelBackHoverPct={20}
						peelBackActivePct={40}
						shadowIntensity={0}
						lightingIntensity={0.05}
						initialPosition={{ x: sticker.x * scale, y: sticker.y }}
						peelDirection={30}
					/>
				))}

				<div className='absolute bottom-5 left-[40.5%] text-skill-dark light:text-skill-light max-sm:left-1/13'>
					{t('codingAdviceStickers')}
				</div>
			</motion.div>

			<InfoBlockPage
				numberBlock='03'
				title='codingBackEndTitle'
				secondTitle='codingBackEndSecondTitle'
				text='codingBackEndText'
			/>

			<InfoBlockPage secondTitle='codingDBsTitle' text='codingDBsText' />

			<FooterPages />
		</div>
	)
}

export default Coding
