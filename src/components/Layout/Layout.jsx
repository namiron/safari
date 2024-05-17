import React from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import { Outlet } from 'react-router-dom'
import './../../wrapper.scss'

const Layout = ({ productList, handleSearchList, handleCloseWindow, isModalWindow }) => {
	return (
		<>
			<header className='header'>
				<Header productList={productList} handleSearchList={handleSearchList} handleCloseWindow={handleCloseWindow} isModalWindow={isModalWindow} />
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