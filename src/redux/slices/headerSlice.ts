import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Lang = 'en' | 'ru'
export type Theme = 'dark' | 'light'

interface IHeaderSlice {
	lang: Lang
	theme: Theme
	isSidebarOpened: boolean
}

const initialState: IHeaderSlice = {
	lang: (localStorage.getItem('lang') as Lang) || 'ru',
	theme: (localStorage.getItem('theme') as Theme) || 'dark',
	isSidebarOpened: false,
}

export const headerSlice = createSlice({
	name: 'options',
	initialState,
	reducers: {
		setLang(state, action: PayloadAction<Lang>) {
			state.lang = action.payload
		},
		setTheme(state, action: PayloadAction<Theme>) {
			state.theme = action.payload
		},
		setSidebar(state, action: PayloadAction<boolean>) {
			state.isSidebarOpened = action.payload
		},
	},
})

export const { setLang, setTheme, setSidebar } = headerSlice.actions
export default headerSlice.reducer
