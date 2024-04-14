import React from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import { Outlet } from 'react-router-dom'
import './../../wrapper.scss'

const Layout = ({ productList, handleSearchList }) => {
	return (
		<>
			<header className='header'>
				<Header productList={productList} handleSearchList={handleSearchList} />
			</header>
			<main className='main'>
				<Outlet />
			</main>
			<footer className='footer'>
				<Footer />
			</footer>
		</>
	)
}
export default Layout;