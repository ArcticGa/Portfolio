import { AnimatePresence, motion } from 'framer-motion'
import { lazy, useState } from 'react'
import ClosePageBtn from '../components/BaseComponents/ClosePageBtn'
import PortfolioNav from '../components/BaseComponents/PortfolioNav'
import { useTranslate } from '../hooks/useTranslate'
import type { PortfolioKey } from '../types/types'
import { portfolioWorks } from '../utils/arrays'

const WorkPopup = lazy(() => import('../components/BaseComponents/WorkPopup'))

const Portfolio = () => {
	const [works, setWorks] = useState<PortfolioKey>('web')
	const [openedWork, setOpenedWork] = useState<
		null | (typeof selected.works)[0]
	>(null)

	const t = useTranslate()

	const selected = portfolioWorks[works]

	return (
		<div className='relative'>
			<ClosePageBtn />
			<div className='h-[calc(100vh - 105px)]'>
				<div className='mt-header-hight px-50 pt-8 max-sm:pb-24 max-2xl:px-20 max-xl:px-10 max-lg:px-8 max-lg:pt-4 max-sm:pt-2'>
					<div className='text-7xl text-base light:text-primary max-lg:text-5xl font-bold'>
						{selected.name}
					</div>
					<div className='my-6 text-base light:text-primary max-md:my-4'>
						{t('portfolioSubtitle')}
					</div>

					<AnimatePresence mode='wait'>
						<motion.div
							key={works}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
						>
							<div className='w-full h-2 bg-[#8670c4] rounded-full mb-6' />
							<div className='flex max-sm:flex-col gap-4'>
								{!selected.works.length && (
									<div className='text-xl'>{t('artistShowCaseText')}</div>
								)}

								{selected.works.map((work, index) => (
									<motion.div
										key={index}
										onClick={() => setOpenedWork(work)}
										className={`group relative max-w-1/3 max-xl:max-w-1/2 max-sm:max-w-full w-full rounded-xl overflow-hidden bg-white/5 light:border-border-ballpit light:bg-black/15 cursor-pointer ${
											work.ratio === 'portrait' ? 'max-w-1/5' : 'max-w-1/3'
										}`}
										whileHover='hover'
										initial='initial'
									>
										<img
											loading='lazy'
											decoding='async'
											src={work.img}
											alt='project-img'
											className='object-cover w-full h-full'
										/>

										<motion.div
											className='absolute inset-0 bg-black/80 light:bg-base/80'
											variants={{
												initial: { opacity: 0 },
												hover: { opacity: 1 },
											}}
											transition={{ duration: 0.35 }}
										/>

										<motion.div
											className='absolute inset-0 flex items-center justify-center text-base light:text-primary text-3xl font-bold'
											variants={{
												initial: { opacity: 0 },
												hover: { opacity: 1 },
											}}
											transition={{ duration: 0.35, ease: 'easeOut' }}
										>
											{work.name}
										</motion.div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Popup Component */}
					<AnimatePresence>
						{openedWork && (
							<WorkPopup
								openedWork={openedWork}
								setOpenedWork={setOpenedWork}
							/>
						)}
					</AnimatePresence>
				</div>

				{/* Bottom Navigation */}
				<PortfolioNav works={works} setWorks={setWorks} />
			</div>
		</div>
	)
}

export default Portfolio
