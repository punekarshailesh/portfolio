import Link from 'next/link'
import SectionHeader from 'components/common/SectionHeader'

import styles from './skills.module.css'

export default function Skills() {
	return (
		<div className='margin'>
			<div className={styles['skills']} id='skills'>
				<SectionHeader
					title='Things I can do'
					tag='Skills'
					description='Learning new things everyday...'
					imageUrl='/images/skills.png'
					type='center'
				/>
				<div className={styles['cards-grid']}>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['frontend']}>
							<img src='/icons/star.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Frontend Development</span>
							<span className={styles['skill-description']}>Develop beautiful websites</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['backend']}>
							<img src='/icons/settings.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Backend Development</span>
							<span className={styles['skill-description']}>Develop &amp; deploy web servers</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['uiux']}>
							<img src='/icons/category.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>UI/UX Design</span>
							<span className={styles['skill-description']}>
								Plan &amp; design web/app interfaces
							</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['graphic-design']}>
							<img src='/icons/edit.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Data Engineer</span>
							<span className={styles['skill-description']}>Developing ML models and analytical solutions using Python, SQL etc.</span>
						</div>
					</div>
				</div>
				<Link href='/#projects' passHref>
					<button className='w-[180px] mx-auto mt-[64px]'>
						Projects <img src='/icons/right-arrow.svg' />
					</button>
				</Link>
			</div>
		</div>
	)
}
