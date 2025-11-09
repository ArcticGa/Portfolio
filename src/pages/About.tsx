import ClosePageBtn from '../components/BaseComponents/ClosePageBtn'

const About = () => {
	return (
		<div className='relative'>
			<div
				className={`absolute top-0 right-0 w-[70%] h-[calc(100vh-105px-16px)] bg-[url('/public/images/bgAbout.png')] bg-no-repeat`}
			/>
			<ClosePageBtn />
			<div className='flex items-center h-[calc(100vh-105px-16px)] overflow-hidden px-50'>
				<div className='flex-1/2 relative text-sm'>
					<div>Программирование и искусство это совсем другой мир</div>
					<div className='text-7xl font-bold py-6'>Who I am</div>
					<div>
						Краткое введение о том, кто я и чем занимаюсь как разработчик и
						художник
					</div>
					<div className='absolute w-full h-[300px] border-t border-r mt-12 rounded-tr-[70px]' />
				</div>

				<div className='flex-1/2'></div>
			</div>

			<div className='flex mt-16 mb-36 px-50'>
				<div className='flex-1 pr-14 flex items-center justify-between text-4xl font-bold'>
					<div className='text-6xl font-light'>01</div>
					<div>Обо Мне</div>
				</div>
				<div className='flex-1 pl-14 border-l-2 border-[#3a3a3a]'>
					<div className='text-2xl font-bold mb-4'>Введение</div>
					<div>
						I'm Federico, a developer who loves building digital solutions. My
						distinctive trait is combining robust code with elegant design,
						impactful graphics, and meticulous attention to user experience
						(UX). The goal is, therefore, to create products that are not only
						efficient, but also pleasant to use and look at.
					</div>
				</div>
			</div>

			<div className='text-center text-6xl font-bold'>Личные навыки</div>
		</div>
	)
}

export default About
