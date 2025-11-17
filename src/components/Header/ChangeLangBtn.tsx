import { motion } from 'framer-motion'
import { setLang, type Lang } from '../../redux/slices/headerSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const currentLangStyles =
	'bg-base text-primary light:bg-primary light:text-base'

const ChangeLangBtn = ({ selectedLang }: { selectedLang: string }) => {
	const dispatch = useAppDispatch()
	const { lang } = useAppSelector(state => state.headerSlice)

	const handleChangeLanguage = (selectLang: string) => {
		dispatch(setLang(selectLang as Lang))
		localStorage.setItem('lang', selectLang)
	}

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			onClick={() => handleChangeLanguage(selectedLang)}
			className={`${
				lang === selectedLang && currentLangStyles
			} px-2 py-0.5 rounded-md cursor-pointer`}
		>
			{selectedLang.toUpperCase()}
		</motion.div>
	)
}

export default ChangeLangBtn
