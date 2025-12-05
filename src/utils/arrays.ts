import type { WorkItem } from '../types/types'
import jsSticker from '/images/jsSticker.avif'
import reactSticker from '/images/reactSticker.avif'
import reduxSticker from '/images/reduxSticker.avif'
import tailwindSticker from '/images/tailwindSticker.avif'
import tsSticker from '/images/tsSticker.avif'
import viteSticker from '/images/viteSticker.avif'
import vsCodeSticker from '/images/vsCodeSticker.avif'

export const skillsList = [
	'Developer',
	'Artist',
	'3D',
	'Design',
	'React',
	'Next',
]

export const slides = [
	{
		id: 1,
		img: '/images/bgAbout.avif',
		link: '/about',
		title: 'about',
		text: 'descAbout',
	},
	{
		id: 2,
		img: '/images/bgCoding.avif',
		link: '/coding',
		title: 'coding',
		text: 'descCoding',
	},
	{
		id: 3,
		img: '/images/bgArtist.avif',
		link: '/artist',
		title: 'artist',
		text: 'descArtist',
	},
	{
		id: 4,
		img: '/images/bgPortfolio.avif',
		link: '/portfolio',
		title: 'portfolio',
		text: 'descPortfolio',
	},
] as const

export const devSkills = [
	{
		name: 'React',
		level: 'experienced',
	},
	{
		name: 'NextJs',
		level: 'basic',
	},
	{
		name: 'JavaScript',
		level: 'high',
	},
	{
		name: 'TypeScript',
		level: 'intermediate',
	},
	{
		name: 'Redux Toolkit',
		level: 'intermediate',
	},
	{
		name: 'HTML',
		level: 'high',
	},
	{
		name: 'CSS',
		level: 'experienced',
	},
	{
		name: 'ThreeJs',
		level: 'basic',
	},
	{
		name: 'Framer Motion',
		level: 'experienced',
	},
	{
		name: 'Tailwind',
		level: 'high',
	},
	{
		name: 'React Hook Form',
		level: 'intermediate',
	},
	{
		name: 'React Router',
		level: 'high',
	},
	{
		name: 'NodeJs',
		level: 'intermediate',
	},
	{
		name: 'MERN Architecture',
		level: 'intermediate',
	},
	{
		name: 'Vercel',
		level: 'experienced',
	},
] as const

export const stickersArray = [
	{
		name: reactSticker,
		x: 200,
		y: 200,
	},
	{
		name: vsCodeSticker,
		x: 450,
		y: 50,
	},
	{
		name: jsSticker,
		x: 550,
		y: 300,
	},
	{
		name: tsSticker,
		x: 700,
		y: 100,
	},
	{
		name: reduxSticker,
		x: 950,
		y: 40,
	},
	{
		name: tailwindSticker,
		x: 1100,
		y: 200,
	},
	{
		name: viteSticker,
		x: 800,
		y: 300,
	},
]

export const navPortfolioItems = ['Web', 'Design', '3D'] as const

export const portfolioWorks = {
	web: {
		name: 'Web',
		works: [
			{
				img: '/images/gamesWorldImg.avif',
				ratio: 'landscape',
				name: 'Games World',
				text: 'portfolioGamesWorld',
				mainLink: 'https://games-world-ten.vercel.app',
				githubLink: 'https://github.com/ArcticGa/GamesPetProject',
				technologies: [
					'React',
					'TypeScript',
					'Tailwind CSS',
					'Redux Toolkit',
					'React Hook Form',
					'Axios',
					'React Router',
					'Swiper',
					'React Content Loader',
					'Vercel',
					'Node.js',
					'Express.js',
					'MongoDB',
					'FreeToGame API',
					'JWT',
				],
			} as const as WorkItem,
			{
				img: '/images/portfolio.avif',
				ratio: 'landscape',
				name: 'Portfolio',
				text: 'portfolioPortfolio',
				githubLink: 'https://github.com/ArcticGa/Portfolio',
				technologies: [
					'React',
					'TypeScript',
					'Tailwind CSS',
					'Framer-Motion',
					'ThreeJs',
					'Redux Toolkit',
					'React Router',
					'ReactBits',
					'Vercel',
				],
			} as const as WorkItem,
		],
	},
	design: {
		name: 'Design',
		works: [],
	},
	modelling: {
		name: '3D',
		works: [
			{
				img: '/images/nina.avif',
				ratio: 'portrait',
				name: 'Anime Girl',
				text: 'portfolioAnime',
				technologies: ['Blender'],
			} as const as WorkItem,
			{
				img: '/images/axolotl.avif',
				ratio: 'portrait',
				name: 'Axolotl',
				text: 'portfolioAxolotl',
				technologies: ['Blender'],
			} as const as WorkItem,
		],
	},
} as const
