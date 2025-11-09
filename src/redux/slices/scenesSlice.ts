import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IScenesSlice {
	scene: number
}

const initialState: IScenesSlice = {
	scene: Number(localStorage.getItem('scene')) || 0,
}

export const scenesSlice = createSlice({
	name: 'scenes',
	initialState,
	reducers: {
		setScene(state, action: PayloadAction<number>) {
			state.scene = action.payload
		},
	},
})

export const { setScene } = scenesSlice.actions
export default scenesSlice.reducer
