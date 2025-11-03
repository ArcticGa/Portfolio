import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import headerSlice from './slices/headerSlice'

export const store = configureStore({
	reducer: {
		headerSlice,
	},
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
