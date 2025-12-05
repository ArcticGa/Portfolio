import { useGLTF, useTexture } from '@react-three/drei'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import CursorGlow from './components/BaseComponents/CursorGlow'
import PaddingBlock from './components/BaseComponents/PaddingsBlock'
import ScrollToTop from './components/BaseComponents/ScrollToTop'
import SmoothScroll from './components/BaseComponents/SmoothScroll'
import Header from './components/Header/Header'
import IntroScreen from './components/IntroScreen/IntroScreen'
import About from './pages/About'
import Artist from './pages/Artist'
import Coding from './pages/Coding'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { useAppSelector } from './redux/store'

const pageVariants: Variants = {
	initial: { y: '100%', opacity: 0 },
	animate: { y: 0, opacity: 1 },
	exit: { y: '-100%', opacity: 0 },
}

const App = () => {
	const [showIntro, setShowIntro] = useState(true)
	const { theme } = useAppSelector(state => state.headerSlice)
	const location = useLocation()

	useGLTF.preload('/models/nina.glb')
	useGLTF.preload('/models/axolotl.glb')
	useTexture.preload('/hdr/venice_sunset_1k.hdr')

	useLayoutEffect(() => {
		const storageTheme = localStorage.getItem('theme')
		if (storageTheme === 'light') {
			document.documentElement.classList.add('light')
		} else {
			document.documentElement.classList.remove('light')
		}
	}, [])

	useEffect(() => {
		if (theme === 'light') {
			document.documentElement.classList.add('light')
		} else {
			document.documentElement.classList.remove('light')
		}
	}, [theme])

	const handleModelLoaded = () => {
		setTimeout(() => setShowIntro(false), 300)
	}

	const showCursorGlow = location.pathname !== '/'

	return (
		<SmoothScroll>
			<ScrollToTop />
			<div className='relative min-h-screen overflow-hidden bg-background light:bg-base text-base light:text-primary'>
				<AnimatePresence mode='wait'>
					{showIntro ? (
						<motion.div
							key='intro'
							initial={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1 }}
						>
							<IntroScreen onFinish={handleModelLoaded} />
						</motion.div>
					) : (
						<>
							{showCursorGlow && <CursorGlow />}
							<Header />
							<Routes location={location} key={location.pathname}>
								<Route path='/' element={<Home />} />
								<Route
									path='/about'
									element={
										<motion.div
											initial='initial'
											animate='animate'
											exit='exit'
											variants={pageVariants}
											transition={{
												type: 'tween',
												ease: 'easeInOut',
												duration: 0.4,
											}}
										>
											<PaddingBlock>
												<About />
											</PaddingBlock>
										</motion.div>
									}
								/>
								<Route
									path='/coding'
									element={
										<motion.div
											initial='initial'
											animate='animate'
											exit='exit'
											variants={pageVariants}
											transition={{
												type: 'tween',
												ease: 'easeInOut',
												duration: 0.4,
											}}
										>
											<PaddingBlock>
												<Coding />
											</PaddingBlock>
										</motion.div>
									}
								/>
								<Route
									path='/artist'
									element={
										<motion.div
											initial='initial'
											animate='animate'
											exit='exit'
											variants={pageVariants}
											transition={{
												type: 'tween',
												ease: 'easeInOut',
												duration: 0.4,
											}}
										>
											<PaddingBlock>
												<Artist />
											</PaddingBlock>
										</motion.div>
									}
								/>
								<Route path='/portfolio' element={<Portfolio />} />
							</Routes>
						</>
					)}
				</AnimatePresence>
			</div>
		</SmoothScroll>
	)
}

export default App
