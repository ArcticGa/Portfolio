import { translations } from '../locales'
import { useAppSelector } from '../redux/store'

export const useTranslate = () => {
	const lang = useAppSelector(state => state.headerSlice.lang)
	return <K extends keyof typeof translations.en>(key: K) => {
		return translations[lang][key]
	}
}
