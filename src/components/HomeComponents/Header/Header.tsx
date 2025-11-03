import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import { useTranslate } from '../../../hooks/useTranslate'
import ChangeLangBtn from './ChangeLangBtn'
import ChangeThemeBtn from './ChangeThemeBtn'
import NavItem from './NavItem'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const t = useTranslate()

	const logoVariants: Variants = {
		hidden: { y: 5, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
	}

	const headerVariants: Variants = {
		hidden: { y: 5, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.2 } },
	}

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

	const optionsVariants: Variants = {
		hidden: { y: 5, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.5 } },
	}

	const burgerLine = {
		closed: { rotate: 0, y: 0 },
		openTop: { rotate: 45, y: 6 },
		openBottom: { rotate: -45, y: -7 },
	}

	return (
		<header className='flex items-center justify-between px-5 bg-transparent light:bg-transparent backdrop-blur-lg transition-all'>
			<div className='flex items-center gap-20'>
				<motion.div
					className='bg-gray-600 px-2 py-1 rounded-xl text-white'
					initial='hidden'
					animate='visible'
					variants={logoVariants}
				>
					Logo
				</motion.div>

				<motion.ul
					className='hidden md:flex gap-8'
					initial='hidden'
					animate='visible'
					variants={headerVariants}
				>
					<NavItem>{t('projects')}</NavItem>
					<NavItem>{t('skills')}</NavItem>
					<NavItem>{t('about')}</NavItem>
					<NavItem>{t('contact')}</NavItem>
				</motion.ul>
			</div>

			<motion.div
				className='flex items-center gap-4'
				initial='hidden'
				animate='visible'
				variants={optionsVariants}
			>
				<div className='flex items-center gap-1 text-sm font-bold'>
					<ChangeLangBtn selectedLang='ru' />
					<ChangeLangBtn selectedLang='en' />
				</div>
				<ChangeThemeBtn />
			</motion.div>

			<div
				className={`md:hidden cursor-pointer z-50`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<motion.div
					animate={isOpen ? 'openTop' : 'closed'}
					variants={burgerLine}
					className={`${
						isOpen ? 'bg-primary light:bg-base' : 'bg-base light:bg-primary'
					} w-8 h-[3px] rounded origin-center`}
				/>
				<motion.div
					animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
					className={`${
						isOpen ? 'bg-primary light:bg-base' : 'bg-base light:bg-primary'
					} w-8 h-[3px] rounded my-1`}
				/>
				<motion.div
					animate={isOpen ? 'openBottom' : 'closed'}
					variants={burgerLine}
					className={`${
						isOpen ? 'bg-primary light:bg-base' : 'bg-base light:bg-primary'
					} w-8 h-[3px] rounded origin-center`}
				/>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						key='sidebar'
						className='fixed top-0 right-0 w-full h-screen text-primary light:text-base bg-base light:bg-primary z-30 flex justify-center items-center'
						initial='hidden'
						animate='visible'
						exit='exit'
						variants={navVariants}
					>
						<ul className='flex flex-col gap-12 text-3xl font-extrabold text-center'>
							{(['projects', 'skills', 'about', 'contact'] as const).map(
								(item, i) => (
									<motion.div
										key={item}
										custom={i}
										variants={itemVariants}
										initial='hidden'
										animate='visible'
									>
										<NavItem>{t(item)}</NavItem>
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
