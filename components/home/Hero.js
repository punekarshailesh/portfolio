import Link from 'next/link'
import Navbar from 'components/home/Navbar'

import styles from './hero.module.css'

export default function Hero() {
	return (
		<div className={styles['hero']}>
			<Navbar />
			<div className='margin'>
				<div className={styles['hero-content']}>
					<div className={styles['hero-text-wrapper']}>
						<h1>Shailesh Madne</h1>
						<p>Front End Developer &amp; Data Science Engineer</p>
						<div className={styles['cta-wrapper']}>
							<a href='/resume-shailesh-madne.pdf' target='_blank'>
								<button>
									<img src='/icons/resume.svg' className='mr-[-3px]' />
									Resume
								</button>
							</a>
							<Link href='/#projects' passHref>
								<button className='button-outline'>Projects</button>
							</Link>
						</div>
					</div>
					<img src='/images/hero.svg' className={styles['hero-image']} />
				</div>
			</div>
		</div>
	)
}
