import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { lenis } from '../../lib/lenis'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		if (!lenis) return

		lenis.scrollTo(0, { immediate: true })

		setTimeout(() => {
			lenis.scrollTo(0, { immediate: true })
		}, 30)

		requestAnimationFrame(() => {
			lenis.scrollTo(0, { immediate: true })
		})
	}, [pathname])

	return null
}

export default ScrollToTop
