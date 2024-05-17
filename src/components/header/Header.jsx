import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../construction/Logo';
import { useDispatch } from 'react-redux';
import { CartIcon, FavoriteIcon, UserIcon } from '../../construction/Links';
import { GiHamburgerMenu } from "react-icons/gi";
import header from '../../modules/header.module.scss';
import Search from '../../construction/forms/Search';
import '../../wrapper.scss';
import { useClickOutSide, useCustomUsers } from '../../hooks/untils';
import { ACCESSORIES, CLOSES, HOME_HEADER, SHOES } from './../../common/constants';
import { getUsers, createUsersOnServer, comparisonsData } from '../../redux/reducers/userSlice';
import CustomModalUser from '../../construction/CustomModal/CustomModalUser';

const Header = ({ productList, handleSearchList, handleCloseWindow, isModalWindow }) => {

	//----------------------------------
	const mouseRef = useRef(null);
	const [isOpen, setOpen] = useState(false);

	const [userData, setUserData] = useState({});
	const dispatch = useDispatch();



	const users = useCustomUsers()

	useEffect(() => {
		if (Object.keys(userData).length > 0) {
			dispatch(createUsersOnServer(userData));
		}
		dispatch(getUsers());
	}, [userData, dispatch]);


	const handleSetUser = (data) => {
		setUserData({
			name: data.firstName,
			surname: data.lastName,
			email: data.email,
			password: data.password,
			signUp: data.signUp,
			privacy: data.privacy,
			cart: [],
			favorite: []
		});
	};

	const handleLogInUser = (data) => {
		dispatch(comparisonsData({
			email: data.email,
			password: data.password
		}));
	};

	const closeMenu = () => {
		if (isOpen) setOpen(false);
	};

	const handleMenuClick = () => {
		if (window.innerWidth <= 968) {
			closeMenu();
		}
	};

	useClickOutSide(mouseRef, () => {
		if (isOpen) setTimeout(() => setOpen(false), 50);
	});

	//----------------------------------


	return (
		<header className={header.header}>
			<div className={header.container}>
				<nav className={`${header.menu} ${isOpen ? header.active : ''}`} ref={mouseRef}>
					<ul className={header.list}>
						<li className={header.item}><Link to='/' className={header.link} onClick={handleMenuClick}>{HOME_HEADER}</Link></li>
						<li className={header.item}><Link to='/clothes' className={header.link} onClick={handleMenuClick}>{CLOSES}</Link></li>
						<li className={header.item}><Link to='/shoes' className={header.link} onClick={handleMenuClick}>{SHOES}</Link></li>
						<li className={header.item}><Link to='/accessories' className={header.link} onClick={handleMenuClick}>{ACCESSORIES}</Link></li>
					</ul>
				</nav>
				<Logo />
				<nav className={header.navigation}>
					<Search productList={productList} handleSearchList={handleSearchList} />
					<UserIcon handleCloseWindow={handleCloseWindow} users={users} />
					<CartIcon />
					<FavoriteIcon />
					<CustomModalUser isModalWindow={isModalWindow} handleCloseWindow={handleCloseWindow} handleLogInUser={handleLogInUser} handleSetUser={handleSetUser} />
				</nav>
				<button type="burgerBtn" onClick={() => setOpen(!isOpen)} className={header.burgerBtn}><GiHamburgerMenu className='burgerIcon' /></button>
			</div>
		</header>
	);
};

export default Header;
