import type React from 'react'
import type { SetStateAction } from 'react'
import { navPortfolioItems, type PortfolioKey } from '../../utils/arrays'

type PortfolioNavProps = {
	works: string
	setWorks: React.Dispatch<SetStateAction<PortfolioKey>>
}

const map: Record<string, PortfolioKey> = {
	Web: 'web',
	Design: 'design',
	'3D': 'modelling',
}

const PortfolioNav = ({ works, setWorks }: PortfolioNavProps) => {
	return (
		<div className='fixed flex items-center gap-3 bottom-8 left-1/10 max-w-[1536px] w-full bg-[#1c1b2e] light:bg-[#cacaca] backdrop-blur-xl p-2.5 rounded-full'>
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
	)
}

export default PortfolioNav
