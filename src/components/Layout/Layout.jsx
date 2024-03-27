import React from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import { Outlet } from 'react-router-dom'

const Layout = (props) => {
	return (
		<>
			<header className='header'>
				<Header />
			</header>
			<Outlet />
			<footer className='footer'>
				<Footer />
			</footer>
		</>
	)
}
export default Layout;