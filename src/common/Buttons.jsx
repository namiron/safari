import React, { useState, useEffect } from 'react';
import btn from '../modules/buttons.module.scss'
import { ImArrowLeft2 } from "react-icons/im";
import { CiLogin } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { BACK, CONTINUE_SHOPPING, HOME, SIG_IN, CREATE_ACCOUNT, MOVE_TO_FAVORITES, REMOVE } from './constants';
import { useDispatch } from 'react-redux';
import { MdFavorite } from "react-icons/md";
import { discount, useCustomCurrentUser } from '../hooks/untils';
import { addToFavoriteForUser, removeFromFavoriteForUser } from '../redux/reducers/userSlice';
//---------------------------------------

//---------------------------------------

export const Up = () => {
	const [isVisible, setIsVisible] = useState(false);


	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);


	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<div className={btn.up}>
			{isVisible && (
				<button onClick={scrollToTop} className={btn.up} >
					Up
				</button >
			)}
		</div>
	);
};

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



export const AddToCart = ({ ways }) => {
	return (
		<Link to={ways} className={btn.addToCart}>
			Add to cart <FaCartPlus style={{ color: '#ED165F' }} />
		</Link>


	);
};

export const AddToCartWithoutUser = ({ handleCloseWindow }) => {
	return (
		<div onClick={handleCloseWindow} className={btn.addToCart}>
			Add to cart <FaCartPlus style={{ color: '#ED165F' }} />
		</div>


	);
};

export const LogButton = ({ handleCloseWindow }) => {
	return (
		<span onClick={handleCloseWindow} className={btn.loginBtn}>
			Login
		</span>


	);
};

export const FavoriteBtnWithoutUser = ({ handleCloseWindow }) => {
	return (
		<div onClick={handleCloseWindow} className={btn.favorite}><MdFavorite className={btn.heart} /> </div>
	)
}


export const FavoriteBtn = ({ image, title, price, id }) => {
	//------------------------------------------
	const currentUser = useCustomCurrentUser();
	const [item, setItem] = useState({});
	const dispatch = useDispatch();

	const [result] = discount(price)

	const newFavoriteItem = () => {
		const updatedItem = {
			id: id,
			image: image,
			price: result,
			title: title
		};

		setItem(prevItem => ({
			...prevItem,
			[id]: updatedItem
		}));
		console.log('newFavoriteItem:', updatedItem);
		if (currentUser) {
			dispatch(addToFavoriteForUser({ item: updatedItem, currentUser }));
		}
	};

	const removeFavoriteItem = () => {
		if (currentUser) {
			dispatch(removeFromFavoriteForUser({ id, currentUser }));
		}
	};

	const findItemForFavorite = (id, array) => {
		const find = array.favorite.find(el => el.id === id);
		return find;
	};

	const itemToFavoriteTrue = findItemForFavorite(id, currentUser);

	return (
		<div onClick={itemToFavoriteTrue ? removeFavoriteItem : newFavoriteItem} className={`${itemToFavoriteTrue ? btn.active : btn.favorite}`} >
			<MdFavorite className={`${itemToFavoriteTrue ? btn.heartActive : btn.heart}`} />
		</div>
	);
};


export const Buy = ({ callback }) => {
	return (
		<div className={btn.buy} onClick={callback}>
			Add to cart <FaCartPlus className={btn.buyIcons} />
		</div>
	);
};



export const GoToFavorite = ({ callback }) => {
	return (
		<Link to='/favorite' className={btn.goToFavorite} onClick={callback}><MdFavoriteBorder style={{
			color: '#ED165F',
		}} /> {MOVE_TO_FAVORITES} </Link>
	)
}
export const ToFavorite = () => {
	return (
		<Link to='/favorite' className={btn.ToFavorite}><MdFavoriteBorder className={btn.favoriteIcon} /> {MOVE_TO_FAVORITES} </Link>
	)
}

export const ShoppingDetailsBtn = () => {
	return (
		<Link to='/shopping_details' className={btn.shoppingDetails}> CONTINUE SHOPPING </Link>
	)
}


export const Remove = ({ callback, productId, userId }) => {
	//------------------------------
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(callback({ productId, userId }));
	};
	//------------------------------

	return (
		<button onClick={handleClick} className={btn.remove}><IoIosRemoveCircle style={{
			color: '#ED165F',
		}} /> {REMOVE} </button>
	)
}


