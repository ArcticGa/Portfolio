import type { WorkItem } from '../types/types'
import jsSticker from '/public/images/jsSticker.png'
import reactSticker from '/public/images/reactSticker.png'
import reduxSticker from '/public/images/reduxSticker.png'
import tailwindSticker from '/public/images/tailwindSticker.png'
import tsSticker from '/public/images/tsSticker.png'
import viteSticker from '/public/images/viteSticker.png'
import vsCodeSticker from '/public/images/vsCodeSticker.png'

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
		img: '/public/images/bgAbout.png',
		link: '/about',
		title: 'about',
		text: 'descAbout',
	},
	{
		id: 2,
		img: '/public/images/bgCoding.png',
		link: '/coding',
		title: 'coding',
		text: 'descCoding',
	},
	{
		id: 3,
		img: '/public/images/bgArtist.png',
		link: '/artist',
		title: 'artist',
		text: 'descArtist',
	},
	{
		id: 4,
		img: '/public/images/bgPortfolio.jpg',
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
				img: '/public/images/gamesWorldImg.png',
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
					'JWT',
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
				img: '/public/images/nina.png',
				ratio: 'portrait',
				name: 'Anime Girl',
				text: 'portfolioAnime',
				technologies: ['Blender'],
			} as const as WorkItem,
			{
				img: '/public/images/axolotl.png',
				ratio: 'portrait',
				name: 'Axolotl',
				text: 'portfolioAxolotl',
				technologies: ['Blender'],
			} as const as WorkItem,
		],
	},
} as const
