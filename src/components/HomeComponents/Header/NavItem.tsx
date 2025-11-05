import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { Link } from 'react-router'
import { setSidebar } from '../../../redux/slices/headerSlice'
import { useAppDispatch } from '../../../redux/store'

const NavItem = ({
	linkTo,
	children,
}: {
	linkTo: string
	children: ReactNode
}) => {
	const dispatch = useAppDispatch()

	return (
		<Link to={linkTo} onClick={() => dispatch(setSidebar(false))}>
			<motion.li className='relative nav-item cursor-pointer'>
				<motion.span
					className='relative z-10'
					initial={{ y: 5, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
				>
					{children}
				</motion.span>
			</motion.li>
		</Link>
	)
}

export default NavItem
