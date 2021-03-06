import Header from '../../global/Header'
import s from './layout.module.scss'
import backgroundLogin from '../public/images/background-login.jpg'
import backgroundRegister from '../public/images/background-register.jpg'
import { useRouter } from 'next/dist/client/router'
import Footer from '../../global/Footer'
import { $currentPage, setCurrentPage } from '../../global/store/store'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
	const route = useRouter()

	const currentPage = useStore($currentPage)
	let backgroundClass = ''
	let footerTextColor = ''
	let footerBackgroundColor = ''
	if (currentPage === '/login') {
		backgroundClass = s.loginPage
		footerTextColor = '#ffff'
		footerBackgroundColor = 'rgba(0,0,0,0)'
	} else if (currentPage === '/register') {
		backgroundClass = s.registerPage
		footerTextColor = '#ffff'
		footerBackgroundColor = 'rgba(0,0,0,0)'
	} else if (currentPage === '/') {
		backgroundClass = s.mainPage
		footerTextColor = '#515151'
		footerBackgroundColor = '#e5e5e5'
	}
	useEffect(() => {
		setCurrentPage(route.pathname)
	}, [route.pathname])
	return (
		<>
			<div className={`${s.container} ${backgroundClass}`}>
				<Header />
				<main className={s.main}>{children}</main>
				<Footer
					textColor={footerTextColor}
					backgroundColor={footerBackgroundColor}
				/>
			</div>
		</>
	)
}
