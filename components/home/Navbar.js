import { useState } from 'react'

import Link from 'next/link'

import styles from './navbar.module.css'

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<nav>
			<div className='margin-wide'>
				<div className={styles['nav-content']}>
					<Link href='/'>
						<img className={styles['logo']} src='/logo.svg' />
					</Link>
					<ul className={styles['nav-links']}>
						<li>
							<Link href='/#skills'>Skills</Link>
						</li>
						<li>
							<Link href='/#coding'>Coding</Link>
						</li>
						<li>
							<Link href='/#projects'>Projects</Link>
						</li>
						<li>
							<Link href='/#contact'>Contact</Link>
						</li>
					</ul>
					<div className={styles['menu-icon-wrapper']} onClick={() => setShowMenu((val) => !val)}>
						{showMenu ? <img src='/icons/close.svg' /> : <img src='/icons/menu.svg' />}
						<div className={`${styles['menu-wrapper']} ${!showMenu ? styles['hide-menu'] : ''}`}>
							<ul className={styles['menu-nav-links']}>
								<li>
									<img src='/images/skills.png' />
									<Link href='/#skills'>Skills</Link>
								</li>
								<li>
									<img src='/images/coding.png' />
									<Link href='/#coding'>Coding</Link>
								</li>
								<li>
									<img src='/images/projects.png' className={styles['projects-icon']} />
									<Link href='/#projects'>Projects</Link>
								</li>
								<li>
									<img src='/images/contact.png' />
									<Link href='/#contact'>Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
