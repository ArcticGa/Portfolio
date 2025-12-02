import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ClosePageBtn from '../components/BaseComponents/ClosePageBtn'
import PortfolioNav from '../components/BaseComponents/PortfolioNav'
import GitHubMini from '../components/svgs/GitHubMini'
import Octicon from '../components/svgs/Octicon'
import { useTranslate } from '../hooks/useTranslate'
import { portfolioWorks, type PortfolioKey } from '../utils/arrays'

const Portfolio = () => {
	const [works, setWorks] = useState<PortfolioKey>('web')
	const [openedWork, setOpenedWork] = useState<
		null | (typeof selected.works)[0]
	>(null)

	const t = useTranslate()

	console.log(works)

	const selected = portfolioWorks[works]

	return (
		<div className='relative'>
			<ClosePageBtn />
			<div className='h-[calc(100vh - 105px)]'>
				<div className='mt-header-hight px-50 pt-8 max-2xl:px-20 max-xl:px-10 max-lg:px-8 max-lg:pt-4 max-sm:pt-2'>
					<div className='text-7xl max-lg:text-5xl font-bold'>
						{selected.name}
					</div>
					<div className='my-6 max-md:my-4'>
						A selection of my digital works!
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
										className='group relative max-w-1/3 max-xl:max-w-1/2 max-sm:max-w-full w-full rounded-xl overflow-hidden bg-white/5 light:border-border-ballpit light:bg-black/15 cursor-pointer'
										whileHover='hover'
										initial='initial'
									>
										<img
											src={work.img}
											alt='project-img'
											className='object-cover w-full h-full'
										/>

										<motion.div
											className='absolute inset-0 bg-black/80'
											variants={{
												initial: { opacity: 0 },
												hover: { opacity: 1 },
											}}
											transition={{ duration: 0.35 }}
										/>

										<motion.div
											className='absolute inset-0 flex items-center justify-center text-base text-3xl font-bold'
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

					<AnimatePresence>
						{openedWork && (
							<motion.div
								className='fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-20 overflow-y-auto'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setOpenedWork(null)}
							>
								<motion.div
									className='relative rounded-2xl max-w-[1500px] max-2xl:max-w-[1300px] w-full flex max-xl:items-center max-xl:justify-center gap-4 p-4'
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
									transition={{ duration: 0.3, ease: 'easeOut' }}
									onClick={e => e.stopPropagation()}
								>
									<div className='w-3/4 rounded-xl max-lg:w-full overflow-hidden'>
										<img
											src={openedWork.img}
											alt={openedWork.name}
											className='w-full h-full object-cover rounded-xl'
										/>
									</div>

									<div className='bg-[#0000007a] light:bg-base/80 border border-border-ballpit rounded-xl p-6 w-1/4 max-md:w-full max-2xl:max-h-[465px] overflow-auto flex flex-col justify-between max-xl:hidden'>
										<div className='flex flex-col h-full overflow-y-auto max-h-[70vh] max-md:max-h-[50vh]'>
											<div className='text-4xl max-md:text-2xl font-bold mb-4 text-center'>
												{openedWork.name}
											</div>

											<div className='opacity-80 mb-8 flex-1 text-sm max-md:text-base'>
												{t(openedWork.text)}
											</div>

											<div className='flex items-center gap-2 mb-2 break-all'>
												<Octicon />
												<a
													href={openedWork.mainLink}
													target='_blank'
													className='text-[#4493f8] hover:underline text-sm text-nowrap overflow-hidden'
												>
													{openedWork.mainLink.slice(8)}
												</a>
											</div>

											<div className='flex items-center gap-2 mb-8 break-all'>
												<GitHubMini />
												<a
													href={openedWork.githubLink}
													target='_blank'
													className='text-[#4493f8] hover:underline text-sm text-nowrap overflow-hidden'
												>
													{openedWork.githubLink.slice(8)}
												</a>
											</div>

											<div className='text-lg mb-2'>
												Технологии и инструменты:
											</div>

											<div className='flex items-center gap-1.5 flex-wrap'>
												{openedWork.technologies.map((tech, index) => (
													<div
														key={index}
														className='py-1 px-4 rounded-full border border-border-ballpit text-sm hover:bg-border-ballpit light:hover:text-base cursor-pointer'
													>
														{tech}
													</div>
												))}
											</div>
										</div>
									</div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<PortfolioNav works={works} setWorks={setWorks} />
			</div>
		</div>
	)
}

export default Portfolio
