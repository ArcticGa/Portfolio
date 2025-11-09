import { useNavigate } from 'react-router'
import { useAppSelector } from '../../redux/store'

const ClosePageBtn = () => {
	const { theme } = useAppSelector(state => state.headerSlice)
	const navigate = useNavigate()

	return (
		<div
			onClick={() => navigate('/')}
			className='fixed bg-base light:bg-primary text-primary light:text-base px-3 font-bold h-10 text-center top-8 rounded-full left-[44%] max-lg:left-[47%] z-30 flex items-center cursor-pointer max-md:hidden'
		>
			<div className='pr-3'>
				<svg
					width='24px'
					height='24px'
					viewBox='0 0 24 24'
					fill={theme === 'dark' ? '#161528' : '#f4f1eb'}
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z'
					/>
				</svg>
			</div>
			<div>Закрыть страницу</div>
		</div>
	)
}

export default ClosePageBtn
