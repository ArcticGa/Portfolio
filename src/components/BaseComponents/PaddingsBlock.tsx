import type { ReactNode } from 'react'

const PaddingBlock = ({ children }: { children: ReactNode }) => {
	return (
		<div className='bg-[#0d0d0d] pt-4'>
			<div className='mx-4 max-md:mx-0 bg-backgroundPages light:bg-base rounded-t-2xl'>
				<div className='pt-header-hight'>{children}</div>
			</div>
		</div>
	)
}

export default PaddingBlock
