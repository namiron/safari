import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './../../construction/Logo';
import { CartIcon, FavoriteIcon, UserIcon } from '../../construction/Links';
import { GiHamburgerMenu } from "react-icons/gi";
import header from '../../modules/header.module.scss'
import Search from '../../construction/forms/Search';
import '../../wrapper.scss'
import { useClickOutSide } from '../../hooks/untils';
import { ACCESSORIES, CLOSES, HOME_HEADER, SHOES } from './../../common/constants';

const Header = () => {

	const [isOpen, setOpen] = React.useState(false);
	const mouseRef = React.useRef(null);

	useClickOutSide(mouseRef, () => {
		if (isOpen) setTimeout(() => { setOpen(false) }, 50)

	});

	return (
		<header className={header.header}>
			<div className={header.container}>
				<nav className={`${header.menu} ${isOpen ? header.active : ''}`} ref={mouseRef}>
					<ul className={header.list}>
						<li className={header.item}><Link to='/' className={header.link}>{HOME_HEADER}</Link></li>
						<li className={header.item}><Link to='/clothes' className={header.link}>{CLOSES}</Link></li>
						<li className={header.item}><Link to='/shoes' className={header.link}>{SHOES}</Link></li>
						<li className={header.item}><Link to='/accessories' className={header.link}>{ACCESSORIES}</Link></li>
					</ul>
				</nav>
				<Logo />
				<nav className={header.navigation}>
					<Search />
					<UserIcon />
					<CartIcon />
					<FavoriteIcon />
				</nav>
				<button type="burgerBtn" onClick={() => setOpen(!isOpen)} className={header.burgerBtn}><GiHamburgerMenu className='burgerIcon' /></button>
			</div>
		</header>
	);
};

export default Header
