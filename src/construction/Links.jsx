import React, { useRef, useState } from "react"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom'
import footer from '../modules/footer.module.scss'
import header from '../modules/header.module.scss'
import '../wrapper.scss'
import { useClickOutSide, useCustomCurrentUser } from "../hooks/untils";
import Client from "../components/client/Client";
import ClientLog from "../components/client/ClientLog";


export const Facebook = ({ text = '' }) => {
	return (
		<a target="blanc" className={footer.facebook} href="https://www.facebook.com"> <FaFacebookF style={{ color: '#ED165F', }} /><p>{text}</p></a>
	)
}

export const Twitter = ({ text = '' }) => {
	return (
		<a target="blanc" className={footer.twitter} href="https://twitter.com"> <FaXTwitter style={{ color: '#ED165F', }} /><p>{text}</p></a>
	)
}

export const Instagram = ({ text = '' }) => {
	return (
		<a target="blanc" className={footer.instagram} href="https://www.instagram.com"> <FaInstagram style={{ color: '#ED165F', }} /> <p>{text}</p></a>
	)
}

export const CartIcon = ({ text = '' }) => {
	return (
		<Link to='/cart' className={header.CartBox}> <FaShoppingCart className={header.cartIcon} />{text}</Link>
	)
}

export const FavoriteIcon = ({ text = '' }) => {
	return (
		<Link to='/favorite' className={header.FavoriteBox}>  <MdFavorite className={header.favoriteIcon} />{text}</Link>
	)
}

export const UserIcon = ({ handleCloseWindow }) => {
	const mouseRef = useRef(null);
	const [isOpen, setOpen] = useState(false);

	const currentUser = useCustomCurrentUser();


	const handleIconClick = () => {
		setOpen(!isOpen);
	};

	useClickOutSide(mouseRef, () => {
		if (isOpen) setTimeout(() => setOpen(false), 50);
	});

	return (
		<div className={header.userComponent} ref={mouseRef}>
			<button onClick={handleIconClick}>
				<FaUser className={`${header.userIcon}`} />
			</button>
			<div className={`${header.userDataBox} ${isOpen ? header.active : ''}`}>
				{currentUser ? <Client /> : <ClientLog handleCloseWindow={handleCloseWindow} />}
			</div>
		</div>
	);
};
