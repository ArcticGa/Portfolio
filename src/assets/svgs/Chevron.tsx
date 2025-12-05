import { useAppSelector } from '../../redux/store'

const Chevron = () => {
	const { theme } = useAppSelector(state => state.headerSlice)

	return (
		<svg
			width='36'
			height='36'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			fill={theme === 'dark' ? '#161528' : '#f4f1eb'}
		>
			<path d='M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z' />
		</svg>
	)
}

export default Chevron
