import Scene from '../../ModelThree/Scene'
import Text from './Text'

const MainSection = () => {
	return (
		<div className='flex main-section max-lg:flex-col-reverse'>
			<Text />
			<div className='flex-1 rounded-xl overflow-hidden z-0 max-sm:pointer-events-none'>
				<Scene />
			</div>
		</div>
	)
}

export default MainSection
