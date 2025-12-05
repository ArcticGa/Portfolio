import { motion } from 'framer-motion'
import type React from 'react'
import type { SetStateAction } from 'react'
import GitHubMini from '../../assets/svgs/GitHubMini'
import Octicon from '../../assets/svgs/Octicon'
import { useTranslate } from '../../hooks/useTranslate'
import type { WorkItem } from '../../types/types'

type WorkPopupProps = {
	openedWork: WorkItem
	setOpenedWork: React.Dispatch<SetStateAction<WorkItem | null | undefined>>
}

const WorkPopup = ({ openedWork, setOpenedWork }: WorkPopupProps) => {
	const t = useTranslate()

	return (
		<motion.div
			className='fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-20 overflow-y-auto'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setOpenedWork(null)}
		>
			<motion.div
				className={`relative rounded-2xl max-w-[1500px] max-2xl:max-w-[1300px] w-full flex justify-center max-xl:items-center max-xl:justify-center gap-4 p-4`}
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				transition={{ duration: 0.3, ease: 'easeOut' }}
				onClick={e => e.stopPropagation()}
			>
				<div
					className={`rounded-xl overflow-hidden ${
						openedWork.ratio === 'portrait'
							? 'w-1/4 max-lg:w-2/3'
							: 'w-3/4 max-lg:w-full'
					}`}
				>
					<img
						loading='lazy'
						decoding='async'
						src={openedWork.img}
						alt={openedWork.name}
						className='w-full h-full object-cover rounded-xl'
					/>
				</div>

				<div className='bg-[#0000007a] light:bg-base/80 border border-border-ballpit rounded-xl p-6 w-1/4 max-md:w-full max-2xl:max-h-[465px] flex flex-col justify-between max-xl:hidden'>
					<div className='flex flex-col h-full overflow-y-auto max-h-[70vh] max-md:max-h-[50vh] overflow-auto scrollbar'>
						<div className='text-4xl max-md:text-2xl font-bold mb-4 text-center'>
							{openedWork.name}
						</div>

						{openedWork.text && (
							<div className='opacity-80 mb-8 flex-1 text-sm max-md:text-base'>
								{t(openedWork.text)}
							</div>
						)}

						{openedWork.mainLink && (
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
						)}

						{openedWork.githubLink && (
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
						)}

						{openedWork.technologies && (
							<>
								<div className='text-lg mb-2'>Технологии и инструменты:</div>

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
							</>
						)}
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default WorkPopup
