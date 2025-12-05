import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import type { translations } from '../../locales'

type InfoBlockPageProps = {
	numberBlock?: string
	title?: keyof typeof translations.en
	secondTitle?: keyof typeof translations.en
	text?: keyof typeof translations.en
	children?: ReactNode
}

const fadeUpVariant: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 },
	},
}

const InfoBlockPage = ({
	numberBlock,
	title,
	secondTitle,
	text,
	children,
}: InfoBlockPageProps) => {
	const t = useTranslate()

	return (
		<div className='flex mt-16 mb-28 px-50 max-2xl:px-20 max-xl:px-10 max-lg:px-8 max-md:flex-col'>
			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='flex-1 pr-14 flex items-center justify-between text-4xl font-bold max-md:mb-8 max-md:pr-0'
			>
				<div className='text-6xl font-light text-base light:text-primary'>
					{numberBlock}
				</div>

				{title && (
					<div className='max-md:text-3xl max-md:max-w-[250px] text-base light:text-primary'>
						{t(title)}
					</div>
				)}
			</motion.div>

			<motion.div
				variants={fadeUpVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='flex-1 pl-14 border-l-2 border-hr-info max-md:border-l-0 max-md:border-t-2 max-md:pl-0 max-md:pt-8'
			>
				{secondTitle && (
					<div className='text-3xl font-bold mb-4 text-base light:text-primary'>
						{t(secondTitle)}
					</div>
				)}

				{text && <div className='text-base light:text-primary'>{t(text)}</div>}
				{children && children}
			</motion.div>
		</div>
	)
}

export default InfoBlockPage
