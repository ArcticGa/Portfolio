import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { lazy, useState } from 'react'
import Discord from '../../assets/svgs/Discord'
import GitHub from '../../assets/svgs/GitHub'
import Telegram from '../../assets/svgs/Telegram'
import X from '../../assets/svgs/X'
import { useTranslate } from '../../hooks/useTranslate'

const Ballpit = lazy(() => import('../../reactbits/Ballpit'))

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
	},
}

const FooterPages = () => {
	const date = new Date()
	const [copied, setCopied] = useState(false)

	const t = useTranslate()

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text)
		setCopied(true)

		setTimeout(() => {
			setCopied(false)
		}, 2000)
	}

	return (
		<>
			<AnimatePresence>
				{copied && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5 }}
						className='fixed bottom-4 right-4 bg-notification text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300'
					>
						{t('discordCopyText')}
					</motion.div>
				)}
			</AnimatePresence>

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='px-50 max-2xl:px-20 max-xl:px-10 max-lg:px-8 h-[calc(100vh-105px-40px)] max-lg:h-auto max-lg:pt-20'
			>
				<div className='flex items-center justify-between max-lg:flex-col'>
					<div className='max-lg:text-center max-sm:mb-40'>
						<div className='text-9xl font-bold mb-16 text-base light:text-primary tracking-[6px] max-lg:text-7xl max-lg:tracking-[4px] max-lg:mb-8 max-2xl:text-8xl'>
							{t('footerTitle')}
						</div>
						<div className='max-w-130 mb-32 text-base light:text-primary max-lg:mb-8'>
							{t('footerDescription')}
						</div>

						<div className='flex gap-4 max-lg:justify-center'>
							<a href='https://t.me/dev_aleks' target='_blank'>
								<Telegram />
							</a>
							<a href='https://github.com/ArcticGa' target='_blank'>
								<GitHub />
							</a>
							<a href='https://x.com/monkergeAlex' target='_blank'>
								<X />
							</a>
							<div
								onClick={() => handleCopy('arcticru1')}
								className='cursor-pointer'
							>
								<Discord />
							</div>
						</div>
					</div>

					{window.innerWidth > 700 && (
						<motion.div
							variants={fadeUpVariant}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.3 }}
							className='relative overflow-hidden h-[500px] max-2xl:h-[450px] max-sm:h-[270px] w-1/2 mt-30 max-2xl:mt-12 border border-border-ballpit rounded-2xl max-lg:mt-8 max-lg:w-full max-lg:h-[340px] max-lg:mb-12'
						>
							<div className='h-full w-full overflow-hidden'>
								<Ballpit
									count={100}
									gravity={0}
									friction={1}
									wallBounce={0.95}
									followCursor={false}
									colors={['#3726b5', '#fff', '#424242', '#221f4d']}
									lightIntensity={200}
									minSize={0.7}
									ambientIntensity={2}
								/>
							</div>
						</motion.div>
					)}
				</div>
			</motion.div>

			<div className='bg-backgroundFooter light:bg-base px-40 py-4 text-sm flex justify-between items-center max-lg:flex-col max-lg:px-0 max-lg:py-3'>
				<div className='text-lg text-base light:text-primary'>
					@ Alexander DEVALEX {date.getFullYear()}
				</div>
				<div>
					<span className='text-base light:text-primary'>
						Background Images created with
					</span>
					<a
						className='text-link text-lg ml-2'
						href='https://leonardo.ai'
						target='_blank'
					>
						Leonardo.ai
					</a>
				</div>
				<div className='flex items-center gap-2'>
					<span className='text-base light:text-primary'>Thank you</span>
					<a
						className='text-link text-lg'
						href='https://reactbits.dev'
						target='_blank'
					>
						reactbits.dev
					</a>
				</div>
			</div>
		</>
	)
}

export default FooterPages
