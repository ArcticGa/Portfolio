import type { translations } from '../locales'
import type { portfolioWorks } from '../utils/arrays'

export type Ratio = 'landscape' | 'portrait'

export type PortfolioKey = keyof typeof portfolioWorks

export type WorkItem = {
	img: string
	name: string
	text: keyof typeof translations.en
	mainLink?: string
	githubLink?: string
	technologies?: string[]
	ratio: Ratio
}
