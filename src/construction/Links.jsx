import React from "react"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom'
import footer from '../modules/footer.module.scss'
import '../wrapper.scss'
import { FACEBOOK, INSTAGRAM, TWITTER } from "../common/constants";

export const Facebook = () => {
	return (
		<a target="blanc" className={footer.facebook} href="https://www.facebook.com"> <FaFacebookF style={{ color: '#ED165F', }} /><p>{FACEBOOK}</p></a>
	)
}

export const Twitter = () => {
	return (
		<a target="blanc" className={footer.twitter} href="https://twitter.com"> <FaXTwitter style={{ color: '#ED165F', }} /><p>{TWITTER}</p></a>
	)
}

export const Instagram = () => {
	return (
		<a target="blanc" className={footer.instagram} href="https://www.instagram.com"> <FaInstagram style={{ color: '#ED165F', }} /> <p>{INSTAGRAM}</p></a>
	)
}

export const CartIcon = () => {
	return (
		<Link to='/cart'> <FaShoppingCart className="cartIcon" /></Link>
	)
}

export const FavoriteIcon = () => {
	return (
		<Link to='/favorite'> <MdFavorite className="favoriteIcon" /></Link>
	)
}

export const UserIcon = () => {
	return (
		<Link to='/favorite'> <FaUser className="userIcon" /></Link>
	)
}

