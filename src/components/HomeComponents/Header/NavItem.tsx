import { motion, useAnimation } from 'framer-motion'
import { type ReactNode } from 'react'

const NavItem = ({ children }: { children: ReactNode }) => {
	const controls = useAnimation()

	return (
		<motion.li
			className='relative nav-item cursor-pointer'
			onMouseEnter={() => controls.start({ width: '100%' })}
			onMouseLeave={() => controls.start({ width: '0%' })}
		>
			<motion.span
				className='relative z-10'
				initial={{ y: 5, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3, ease: 'easeOut' }}
			>
				{children}
			</motion.span>
			<motion.span
				className='absolute bottom-0 left-0 h-px bg-white light:bg-primary max-md:bg-primary max-md:light:bg-base'
				initial={{ width: '0%' }}
				animate={controls}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			/>
		</motion.li>
	)
}

export default NavItem
