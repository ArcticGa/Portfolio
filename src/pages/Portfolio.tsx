import ClosePageBtn from '../components/BaseComponents/ClosePageBtn'

const Portfolio = () => {
	return (
		<div className='relative'>
			<ClosePageBtn />
			<div className='h-screen'>
				<div className='mt-header-hight px-50'>Portfolio</div>
				<div className='fixed flex items-center gap-3 bottom-8 left-1/10 max-w-[1536px] w-full bg-[#1c1b2e] light:bg-[#cacaca] backdrop-blur-xl p-2.5 rounded-full'>
					<div className='bg-base text-primary py-2 px-6 rounded-full'>WEB</div>
					<div className='bg-base text-primary py-2 px-6 rounded-full'>
						Design
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
