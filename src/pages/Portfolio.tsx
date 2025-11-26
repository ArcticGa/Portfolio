import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ClosePageBtn from '../components/BaseComponents/ClosePageBtn'
import PortfolioNav from '../components/BaseComponents/PortfolioNav'
import { portfolioWorks, type PortfolioKey } from '../utils/arrays'

const Portfolio = () => {
	const [works, setWorks] = useState<PortfolioKey>('web')
	const [openedWork, setOpenedWork] = useState<
		null | (typeof selected.works)[0]
	>(null)

	const selected = portfolioWorks[works]

	return (
		<div className='relative'>
			<ClosePageBtn />
			<div className='h-[calc(100vh - 105px)]'>
				<div className='mt-header-hight px-50 pt-8'>
					<div className='text-7xl font-bold'>{selected.name}</div>
					<div className='my-6'>A selection of my digital works!</div>

					<AnimatePresence mode='wait'>
						<motion.div
							key={works}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
						>
							<div className='w-full h-2 bg-[#8670c4] rounded-full mb-6' />
							<div className='flex gap-4'>
								{selected.works.map((work, index) => (
									<motion.div
										key={index}
										onClick={() => setOpenedWork(work)}
										className='group relative max-w-1/3 w-full rounded-xl overflow-hidden bg-white/5 light:border-border-ballpit light:bg-black/15 cursor-pointer'
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
								className='fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setOpenedWork(null)}
							>
								<motion.div
									className='p-6 rounded-2xl max-w-[1500px] w-full flex gap-6 relative'
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
									transition={{ duration: 0.3, ease: 'easeOut' }}
									onClick={e => e.stopPropagation()}
								>
									<div className='w-2/3 rounded-xl overflow-hidden'>
										<img
											src={openedWork.img}
											alt={openedWork.name}
											className='w-full h-full object-cover'
										/>
									</div>

									<div className='bg-[#231d33] rounded-xl p-4 w-1/3 flex flex-col justify-between'>
										<div>
											<div className='text-4xl font-bold mb-4'>
												{openedWork.name}
											</div>
											<div className='text-lg opacity-80 mb-4'>aboba</div>
										</div>

										<button
											onClick={() => setOpenedWork(null)}
											className='mt-6 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl'
										>
											Close
										</button>
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
