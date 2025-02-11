import Head from 'next/head'
import Skills from 'components/home/Skills'
import Projects from 'components/home/Projects'
import Education from 'components/home/Education'
import Langauages from 'components/home/Languages'
import Contact from 'components/home/Contact'
import Footer from 'components/home/Footer'
import Coding from 'components/home/Coding'
import Toolkit from 'components/home/Toolkit'
import Hero from 'components/home/Hero'

export default function Home() {
	return (
		<>
			<Head>
				<title>Shailesh Madne - Front End Developer &amp; Data Engineer</title>
				<meta
					name='description'
					content='Emanuel Christo - Full Stack Developer, UI/UX Designer &amp; Graphic Designer'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='flex flex-col gap-[220px] md:gap-[160px]'>
				<Hero />
				<Skills />
				<Coding />
				<Toolkit />
				<Projects />
				<Education />
				<Langauages />
				<Contact />
				<Footer />
			</div>
		</>
	)
}
