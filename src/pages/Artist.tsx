import { motion, type Variants } from 'framer-motion'
import FooterPages from '../components/BaseComponents/FooterPages'
import InfoBlockPage from '../components/BaseComponents/InfoBlockPage'
import PagesMainSection from '../components/BaseComponents/PagesMainSection'

import SceneAxolotl from '../components/ModelThree/SceneAxolotl'
import { useTranslate } from '../hooks/useTranslate'

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
	},
}

const Artist = () => {
	const t = useTranslate()

	return (
		<div className='relative'>
			<PagesMainSection
				startText='artistStartText'
				title='artistTitle'
				description='artistDescription'
				image='bgArtist.avif'
			/>

			<InfoBlockPage
				numberBlock='01'
				title='artistMainInfoTitle'
				secondTitle='artistMainInfoSecondTitle'
				text='artistMainInfoText'
			/>

			<InfoBlockPage secondTitle='artistToolsSecondTitle'>
				<div className='flex gap-4 mt-8'>
					<img
						loading='lazy'
						decoding='async'
						className='w-24 h-24'
						src='/images/photoshopLogo.avif'
						alt='photoshop-logo'
					/>

					<img
						loading='lazy'
						decoding='async'
						className='w-24 h-24'
						src='/images/kritaLogo.avif'
						alt='krita-logo'
					/>

					<img
						loading='lazy'
						decoding='async'
						className='w-24.5 h-24 p-1.5 rounded-3xl bg-[#422b01]'
						src='/images/blenderLogo.avif'
						alt='blender-logo'
					/>
				</div>
			</InfoBlockPage>

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='flex items-end px-50 max-lg:px-20 max-md:px-4 max-md:flex-col mb-40 max-md:items-center'
			>
				<span className='text-6xl font-bold mr-40 max-md:text-4xl max-md:mr-0 text-base light:text-primary'>
					{t('artistShowCaseTitle')}
				</span>
				<span className='text-base light:text-primary'>
					{t('artistShowCaseText')}
				</span>
			</motion.div>

			<InfoBlockPage
				numberBlock='02'
				title='artist3DTitle'
				secondTitle='artist3DSecondTitle'
				text='artist3DText'
			/>

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
			>
				<div className='relative h-8 mb-10'>
					<div className='absolute top-0 left-1/2 border-l-2 h-full border-hr-info' />
				</div>

				<div className='flex justify-center'>
					<div className='flex justify-center items-center w-130 h-130 border border-hr-info rounded-full max-md:w-80 max-md:h-80'>
						<SceneAxolotl />
					</div>
				</div>

				<div className='relative h-8 mt-10'>
					<div className='absolute top-0 left-1/2 border-l-2 h-full border-hr-info' />
				</div>
			</motion.div>

			<FooterPages />
		</div>
	)
}

export default Artist
