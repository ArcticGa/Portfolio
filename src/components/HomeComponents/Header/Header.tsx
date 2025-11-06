import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { useTranslate } from '../../../hooks/useTranslate'
import { setSidebar } from '../../../redux/slices/headerSlice'
import { setScene } from '../../../redux/slices/scenesSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import ChangeLangBtn from './ChangeLangBtn'
import ChangeThemeBtn from './ChangeThemeBtn'
import NavItem from './NavItem'

const Header = () => {
	const dispatch = useAppDispatch()
	const { theme, isSidebarOpened } = useAppSelector(state => state.headerSlice)
	const { scene } = useAppSelector(state => state.scenesSlice)
	const prevSceneRef = useRef(scene)

	const navigate = useNavigate()
	const t = useTranslate()

	const navVariants: Variants = {
		hidden: { x: '100%' },
		visible: { x: 0, transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] } },
		exit: { x: '100%', transition: { duration: 0.3 } },
	}

	const itemVariants: Variants = {
		hidden: { y: 10, opacity: 0 },
		visible: i => ({
			y: 0,
			opacity: 1,
			transition: { delay: 0.15 + i * 0.07, duration: 0.3 },
		}),
	}

	const burgerLine = {
		closed: { rotate: 0, y: 0 },
		openTop: { rotate: 45, y: 6 },
		openBottom: { rotate: -45, y: -8 },
	}

	const direction = scene > prevSceneRef.current ? 1 : -1
	prevSceneRef.current = scene

	const variants: Variants = {
		initial: (dir: number) => ({
			opacity: 0,
			y: dir > 0 ? 20 : -20,
		}),
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: 'easeIn' },
		},
		exit: (dir: number) => ({
			opacity: 0,
			y: dir > 0 ? -20 : 20,
			transition: { duration: 0.3, ease: 'easeIn' },
		}),
	}

	const handleBackHome = () => {
		navigate('/')
		if (scene === 1) {
			dispatch(setScene(0))
		}
	}

	return (
		<header className='flex items-center justify-between px-container max-xl:px-container-xl max-lg:px-container-lg max-sm:px-container-sm bg-background light:bg-base'>
			<div
				onClick={handleBackHome}
				className='flex items-center gap-5 h-10 cursor-pointer'
			>
				<div className='bg-base light:bg-primary px-2 py-1 rounded-md text-white h-full w-10 flex items-center' />

				<AnimatePresence mode='wait' custom={direction}>
					{scene === 0 && (
						<motion.div
							key='alex'
							custom={direction}
							variants={variants}
							initial='initial'
							animate='animate'
							exit='exit'
							className='font-bold max-md:hidden'
						>
							ALEXANDER DEVALEX
						</motion.div>
					)}

					{scene === 1 && (
						<motion.div
							key='btnBackHome'
							custom={direction}
							variants={variants}
							initial='initial'
							animate='animate'
							exit='exit'
							className='text-sm text-primary light:text-base bg-base light:bg-primary h-full flex items-center px-4 py-1 rounded-full font-bold max-md:hidden'
						>
							<div className='flex items-center gap-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='18'
									viewBox='0 -960 960 960'
									width='18'
									fill={theme === 'dark' ? '#161528' : '#f4f1eb'}
								>
									<path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
								</svg>
								<span className='max-md:hidden'>ВЕРНУТЬСЯ НА ГЛАВНУЮ</span>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className='flex items-center gap-4'>
				<div className='flex items-center gap-1 text-sm font-bold'>
					<ChangeLangBtn selectedLang='ru' />
					<ChangeLangBtn selectedLang='en' />
				</div>
				<ChangeThemeBtn />
			</div>

			<div
				className={`md:hidden cursor-pointer z-50`}
				onClick={() => dispatch(setSidebar(!isSidebarOpened))}
			>
				<motion.div
					animate={isSidebarOpened ? 'openTop' : 'closed'}
					variants={burgerLine}
					className={`${
						isSidebarOpened
							? 'bg-primary light:bg-base'
							: 'bg-base light:bg-primary'
					} w-8 h-[3px] rounded origin-center`}
				/>
				<motion.div
					animate={isSidebarOpened ? { opacity: 0 } : { opacity: 1 }}
					className={`${
						isSidebarOpened
							? 'bg-primary light:bg-base'
							: 'bg-base light:bg-primary'
					} w-8 h-[3px] rounded my-1`}
				/>
				<motion.div
					animate={isSidebarOpened ? 'openBottom' : 'closed'}
					variants={burgerLine}
					className={`${
						isSidebarOpened
							? 'bg-primary light:bg-base'
							: 'bg-base light:bg-primary'
					} w-8 h-[3px] rounded origin-center`}
				/>
			</div>

			<AnimatePresence>
				{isSidebarOpened && (
					<motion.nav
						key='sidebar'
						className='fixed top-0 right-0 w-full h-screen text-primary light:text-base bg-base light:bg-background flex justify-center items-center'
						initial='hidden'
						animate='visible'
						exit='exit'
						variants={navVariants}
					>
						<ul className='flex flex-col gap-12 text-3xl font-extrabold text-center'>
							{(['about', 'coding', 'artistSkills', 'portfolio'] as const).map(
								(item, i) => (
									<motion.div
										key={item}
										custom={i}
										variants={itemVariants}
										initial='hidden'
										animate='visible'
									>
										<NavItem linkTo={`/${item}`}>{t(item)}</NavItem>
									</motion.div>
								)
							)}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}

export default Header
