import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Lang = 'en' | 'ru'
export type Theme = 'dark' | 'light'

interface IHeaderSlice {
	lang: Lang
	theme: Theme
}

const initialState: IHeaderSlice = {
	lang: (localStorage.getItem('lang') as Lang) || 'ru',
	theme: (localStorage.getItem('theme') as Theme) || 'dark',
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
	},
})

export const { setLang, setTheme } = headerSlice.actions
export default headerSlice.reducer
