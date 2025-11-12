import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { lazy, useState } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Discord from '../svgs/Discord'
import GitHub from '../svgs/GitHub'
import Telegram from '../svgs/Telegram'

const Ballpit = lazy(() => import('../../reactbits/BallPit'))

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
						className='fixed bottom-4 right-4 bg-[#29007b] text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300'
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
					<div className='max-lg:text-center'>
						<div className='text-9xl font-bold mb-16 tracking-[6px] max-lg:text-7xl max-lg:tracking-[4px] max-lg:mb-8 '>
							{t('footerTitle')}
						</div>
						<div className='max-w-130 mb-32 max-lg:mb-8'>
							{t('footerDescription')}
						</div>

						<div className='flex gap-4 max-lg:justify-center'>
							<a href='https://t.me/dev_aleks' target='_blank'>
								<Telegram />
							</a>
							<a href='https://github.com/ArcticGa' target='_blank'>
								<GitHub />
							</a>
							<div
								onClick={() => handleCopy('arcticru1')}
								className='cursor-pointer'
							>
								<Discord />
							</div>
						</div>
					</div>

					<motion.div
						variants={fadeUpVariant}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}
						className='relative overflow-hidden max-h-[500px] w-1/2 mt-30 border border-[#3a2f4f] rounded-2xl max-lg:mt-8 max-lg:w-full max-lg:max-h-[340px] max-lg:mb-12'
					>
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
					</motion.div>
				</div>
			</motion.div>

			<div className='bg-[#080015] light:bg-base px-40 py-4 text-sm flex justify-between items-center max-lg:flex-col max-lg:px-0 max-lg:py-3'>
				<div className='text-lg'>@ Alexander DEVALEX {date.getFullYear()}</div>
				<div className='flex items-center gap-2'>
					<span>Thank you</span>
					<a
						className='text-[#ab79fd] text-lg'
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
