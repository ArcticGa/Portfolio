import { useGLTF, useTexture } from '@react-three/drei'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Header from './components/HomeComponents/Header/Header'
import IntroScreen from './components/IntroScreen/IntroScreen'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import { useAppSelector } from './redux/store'

const App = () => {
	const [showIntro, setShowIntro] = useState(true)
	const { theme } = useAppSelector(state => state.headerSlice)

	const location = useLocation()

	useGLTF.preload('/public/models/nina.glb')
	useTexture.preload('/public/hdr/venice_sunset_1k.hdr')

	useEffect(() => {
		const storageTheme = localStorage.getItem('theme')

		if (storageTheme && storageTheme === 'light') {
			document.documentElement.classList.add(storageTheme)
		} else {
			document.documentElement.classList.remove('light')
		}
	}, [theme])

	const handleModelLoaded = () => {
		setShowIntro(false)
	}

	return (
		<SmoothScroll>
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
							<Header />
							<Routes location={location} key={location.pathname}>
								<Route path='/' element={<Home />} />
							</Routes>
						</>
					)}
				</AnimatePresence>
			</div>
		</SmoothScroll>
	)
}

export default App
