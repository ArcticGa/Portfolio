import { motion } from 'framer-motion'
import Moon from '../../assets/svgs/Moon'
import Sun from '../../assets/svgs/Sun'
import { setTheme } from '../../redux/slices/headerSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const ChangeThemeBtn = () => {
	const dispatch = useAppDispatch()
	const { theme } = useAppSelector(state => state.headerSlice)

	const handleChangeTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		dispatch(setTheme(newTheme))
		localStorage.setItem('theme', newTheme)
	}
	return (
		<motion.button
			whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
			whileTap={{ scale: 0.95 }}
			onClick={handleChangeTheme}
			className='relative flex items-center gap-1 p-1 border rounded-full cursor-pointer'
		>
			<Moon />
			<Sun />

			<motion.div
				className='absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-base light:bg-primary'
				animate={{
					x: theme === 'dark' ? 0 : 20,
				}}
			/>
		</motion.button>
	)
}

export default ChangeThemeBtn
