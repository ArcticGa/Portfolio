import Scene from '../../ModelThree/Scene'
import Text from './Text'

const MainSection = () => {
	return (
		<section className='flex main-section max-lg:flex-col-reverse'>
			<Text />
			<div className='flex-1 rounded-xl overflow-hidden'>
				<Scene />
			</div>
		</section>
	)
}

export default MainSection
