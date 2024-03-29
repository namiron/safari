import React from 'react';
import btn from '../modules/buttons.module.scss'
import { ImArrowLeft2 } from "react-icons/im";
import { CiLogin } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { BACK, CONTINUE_SHOPPING, HOME, SIG_IN, CREATE_ACCOUNT, MOVE_TO_FAVORITES, REMOVE } from './constants';

//---------------------------------------

//---------------------------------------

export const GoBack = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	return (
		<button className={btn.back} onClick={goBack}> <ImArrowLeft2 />{BACK}</button>
	)
}

export const GoHome = () => {
	return (
		<Link to='/' className={btn.goHome}>{HOME}</Link>
	)
}

export const Nav = () => {
	return (
		<div className={btn.btnNavigations}>
			<GoBack />
			<GoHome />
		</div>
	)
}

export const SignIn = () => {
	return (
		<Link to='/' className={btn.SignIn}>{SIG_IN} <CiLogin /> </Link>
	)
}

export const Shopping = () => {
	return (
		<Link to='/' className={btn.Shopping}>{CONTINUE_SHOPPING} </Link>
	)
}

export const CreateAccount = () => {
	return (
		<Link to='/' className={btn.CreateAccount}>{CREATE_ACCOUNT}</Link>
	)
}

export const Close = () => {
	return (
		<button className={btn.close}><IoMdClose /></button>
	)
}



export const AddToCart = () => {
	return (
		<Link to='/cart' className={btn.addToCart}>
			add to cart <FaCartPlus style={{ color: '#ED165F' }} />
		</Link>
	);
};


export const FavoriteBtn = () => {
	return (
		<Link to='/favorite' className={btn.favorite}><MdFavoriteBorder className={btn.heart} /> </Link>
	)
}


export const GoToFavorite = () => {
	return (
		<Link to='/favorite' className={btn.goToFavorite}><MdFavoriteBorder style={{
			color: '#ED165F',
		}} /> {MOVE_TO_FAVORITES} </Link>
	)
}

export const Remove = () => {
	return (
		<button className={btn.remove}><IoIosRemoveCircle style={{
			color: '#ED165F',
		}} /> {REMOVE} </button>
	)
}

