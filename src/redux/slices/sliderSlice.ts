import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ISliderSlice {
	activeSlide: number
}

const initialState: ISliderSlice = {
	activeSlide: 0,
}

export const sliderSlice = createSlice({
	name: 'slider',
	initialState,
	reducers: {
		setSlide(state, action: PayloadAction<number>) {
			state.activeSlide = action.payload
		},
	},
})

export const { setSlide } = sliderSlice.actions
export default sliderSlice.reducer
