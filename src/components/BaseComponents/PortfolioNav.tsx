import type React from 'react'
import type { SetStateAction } from 'react'
import { useAppSelector } from '../../redux/store'
import { navPortfolioItems, type PortfolioKey } from '../../utils/arrays'

type PortfolioNavProps = {
	works: PortfolioKey
	setWorks: React.Dispatch<SetStateAction<PortfolioKey>>
}

const order: PortfolioKey[] = ['web', 'design', 'modelling']

const map: Record<string, PortfolioKey> = {
	Web: 'web',
	Design: 'design',
	'3D': 'modelling',
}

const PortfolioNav = ({ works, setWorks }: PortfolioNavProps) => {
	const { theme } = useAppSelector(state => state.headerSlice)

	const currentIndex = order.indexOf(works)

	const goNext = () => {
		const nextIndex = (currentIndex + 1) % order.length
		setWorks(order[nextIndex])
	}

	const goPrev = () => {
		const prevIndex = (currentIndex - 1 + order.length) % order.length
		setWorks(order[prevIndex])
	}

	return (
		<div className='fixed flex items-center justify-between bottom-8 left-1/10 max-w-[1536px] w-full bg-[#1c1b2e] light:bg-[#cacaca] backdrop-blur-xl p-2.5 rounded-full'>
			<div className='flex items-center gap-3'>
				{navPortfolioItems.map((item, index) => {
					const value = item === '3D' ? 'modelling' : item.toLowerCase()

					return (
						<div
							key={index}
							onClick={() => setWorks(map[item])}
							className={`py-1.5 px-6 rounded-full cursor-pointer select-none ${
								works === value
									? 'bg-[#8670c4] text-base'
									: 'bg-base text-primary'
							}`}
						>
							{item}
						</div>
					)
				})}
			</div>

			<div className='flex items-center gap-2'>
				<svg
					onClick={goPrev}
					className='rotate-180 cursor-pointer'
					width='36'
					height='36'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					fill={theme === 'dark' ? '#f4f1eb' : '#161528'}
				>
					<path d='M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z' />
				</svg>
				<svg
					onClick={goNext}
					className='cursor-pointer'
					width='36'
					height='36'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					fill={theme === 'dark' ? '#f4f1eb' : '#161528'}
				>
					<path d='M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z' />
				</svg>
			</div>
		</div>
	)
}

export default PortfolioNav
