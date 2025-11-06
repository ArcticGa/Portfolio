import { animate, motion, useMotionValue } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useTranslate } from '../../../hooks/useTranslate'
import { slides } from '../../../utils/arrays'
import Chevron from '../../svgs/Chevron'

const Slider = () => {
	const [active, setActive] = useState(0)
	const [isDragging, setIsDragging] = useState(false)
	const [isScrolling, setIsScrolling] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const navigate = useNavigate()
	const t = useTranslate()

	const x = useMotionValue(0)

	const goTo = useCallback(
		(i: number) => {
			const stepPx = window.innerWidth > 640 ? 470 : 370
			const index = Math.max(0, Math.min(slides.length - 1, i))
			setActive(index)
			animate(x, -index * stepPx, {
				type: 'spring',
				stiffness: 120,
				damping: 20,
			})
		},
		[x]
	)

	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault()
			if (isScrolling) return
			setIsScrolling(true)

			if (e.deltaY > 0) goTo(active + 1)
			else goTo(active - 1)

			setTimeout(() => setIsScrolling(false), 300)
		}

		container.addEventListener('wheel', handleWheel, { passive: false })

		return () => {
			container.removeEventListener('wheel', handleWheel)
		}
	}, [active, isScrolling, goTo])

	return (
		<div className='ml-90 max-xl:ml-40 max-lg:ml-30 max-md:ml-15 max-sm:ml-5'>
			<div className='relative mb-6 '>
				<div className='absolute -left-30 top-0.5 flex items-center gap-2 max-md:hidden'>
					<div
						onClick={() => goTo(active - 1)}
						className='bg-base light:bg-primary rotate-180 rounded-r-4xl rounded-l-md cursor-pointer'
					>
						<Chevron />
					</div>
					<div
						onClick={() => goTo(active + 1)}
						className='bg-base light:bg-primary rounded-r-4xl rounded-l-md cursor-pointer'
					>
						<Chevron />
					</div>
				</div>
				<div className='text-4xl font-bold select-none tracking-[8px] max-sm:tracing-[4px] max-sm:text-2xl'>
					{t(slides[active].title)}
				</div>
			</div>
			<div
				className='relative w-full flex items-center justify-center select-none ml-80 mb-12 max-xl:ml-90 max-lg:ml-130 max-md:ml-160 max-sm:ml-135'
				ref={containerRef}
			>
				<motion.div
					className='flex gap-5 h-[265px]'
					style={{ x }}
					drag='x'
					dragElastic={0.08}
					dragMomentum={false}
					onDragEnd={() => {
						const currentX = x.get()
						const slideWidth = 450
						const newIndex = Math.round(-currentX / slideWidth)
						goTo(newIndex)
					}}
				>
					{slides.map((slide, i) => {
						const isActive = i === active
						const height = isActive ? 265 : 215

						return (
							<motion.div
								key={slide.id}
								style={{
									height,
								}}
								animate={{ height }}
								transition={{ duration: 0.15, ease: 'easeOut' }}
								className='w-[450px] max-sm:w-[350px] h-60 max-sm:h-40 rounded-2xl overflow-hidden border border-white/30 bg-white/5 cursor-grab'
								onPointerDown={() => setIsDragging(false)}
								onPointerMove={() => setIsDragging(true)}
								onPointerUp={() => {
									if (!isDragging && isActive) navigate(slide.link)
								}}
							>
								<img
									src={slide.img}
									alt='slide-img'
									className='object-cover w-full h-full'
									draggable='false'
								/>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
			<div className='max-w-[420px]'>
				<div className='text-xs h-22 select-none'>{t(slides[active].text)}</div>
				<button
					onClick={() => navigate(slides[active].link)}
					className='bg-base light:bg-primary text-primary light:text-base w-3/4 text-start px-5 py-2.5 rounded-full select-none cursor-pointer'
				>
					{t('btnOpenPage')}
				</button>
			</div>
		</div>
	)
}

export default Slider
