import React from 'react';
import { GoToFavorite, LogButton, Nav, Remove, ShoppingDetailsBtn } from './../../common/Buttons';
import { TotalProductsPrice, useCustomCurrentUser } from '../../hooks/untils';
import cart from '../../modules/cart.module.scss'
import { COLOR_CONSTANTA, ITEM_DESCRIPTION, NO_CONTENT, NO_PRODUCT, QUANTITY, SHOPPING_CART, SIZE_CONSTANTA, SUB_TOTAL, TOTAL_CONST, UNIT_PRICE } from '../../common/constants';
import { ImFilesEmpty } from "react-icons/im";
import { removeProductFromUserCart } from '../../redux/reducers/userSlice'


const Cart = ({ handleCloseWindow }) => {


	const currentUser = useCustomCurrentUser()
	return (
		<div className={cart.cart}>
			{currentUser ? <CartWithUser /> : <CartWithoutUser handleCloseWindow={handleCloseWindow} />}
		</div>
	)
}
export default Cart;


export const CartWithoutUser = ({ handleCloseWindow }) => {

	return (
		<>
			<div className={cart.cartWithoutUserWrapper}>
				<div className={cart.container}>
					<div className={cart.navigation}>
						<Nav />
					</div>
					<div className={cart.content}>
						<div className={cart.imageWithoutUser}>
							<ImFilesEmpty className={cart.iconWithoutUser} />
							<p className={cart.textWithoutUser} >{NO_CONTENT}</p>
						</div>
					</div>
					<p className={cart.textWithoutUser} >Please <LogButton handleCloseWindow={handleCloseWindow} /> to add the product in to cart</p>
					<div className={cart.btnWithoutUser}>

					</div>
				</div>
			</div>
		</>
	)
}

export const CartWithUser = () => {
	//---------------------------
	const currentUser = useCustomCurrentUser()



	const total = TotalProductsPrice(currentUser?.cart);

	//---------------------------
	return (
		<>
			<div className={cart.cartWithUserWrapper}>
				<div className={cart.container}>
					<div className={cart.navigation}>
						<Nav />
					</div>
					<div className={cart.heading}>
						<h2 className={cart.title}>{SHOPPING_CART} <span>{currentUser.cart.length}</span></h2>
					</div>
					<div className={cart.content}>
						<ul className={cart.cartList}>
							{currentUser && currentUser.cart.length > 0 ? currentUser.cart.map(({ image, size, price, color, id, title, count }) => {
								return <CartItem key={id} id={id} image={image} size={size} price={price} color={color} title={title} count={count} />
							}) : <p className={cart.cartEmpty}> {NO_PRODUCT} </p>}
						</ul>

					</div>
					<div className={cart.innerBlock}>
						<TotalComponentPrice array={currentUser} callback={TotalProductsPrice} />
						<ShoppingDetailsBtn />
					</div>
				</div>
			</div>
		</>
	)
}

export const CartItem = ({ image, size, price, color, id, title, count }) => {


	//------------------------------------------
	const currentUser = useCustomCurrentUser()

	const userId = currentUser.id

	//------------------------------------------

	return (
		<li className={cart.cartItem}>
			<div className={cart.itemWrapper}>
				<div className={cart.firstColumn}>
					<div className={cart.heading}>
						<h2 className={cart.firstColumnTitle}>{ITEM_DESCRIPTION}</h2>
					</div>
					<div className={cart.firstColumnWrapper}>
						<div className={cart.topRow}>
							<div className={cart.imageBox}>
								<img src={image} alt={title} />
							</div>
							<div className={cart.titleProduct}>
								<h3 className={cart.nameProduct}>{title}</h3>
								<div className={cart.infoRow}>
									<span className={cart.size}>{COLOR_CONSTANTA}-{size}</span>
									<span className={cart.color}> {SIZE_CONSTANTA}-{color}</span>
								</div>
							</div>
						</div>
						<div className={cart.btnCart}>
							<GoToFavorite />
							<Remove productId={id} callback={removeProductFromUserCart} userId={userId} />
						</div>
					</div>

				</div>
				<div className={cart.secondColumn}>
					<div className={cart.quantity}>
						<p className={cart.quantityTitle}>{QUANTITY}</p>
						<div className={cart.quantityBox}>
							<span>{count}</span>
						</div>

					</div>
					<div className={cart.price}>
						<p className={cart.priceTitle}>{UNIT_PRICE}</p>
						<div className={cart.priceBox}>
							<span> {price} $ </span>
						</div>
					</div>
					<div className={cart.totalPrice}>
						<p className={cart.totalPriceTitle} >{SUB_TOTAL}</p>
						<div className={cart.totalPriceBox}>
							<span>{count * price} $ </span>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}


export const TotalComponentPrice = ({ callback, array }) => {
	//--------------------------------
	const total = callback(array?.cart);

	return (

		<div className={cart.oll}>
			<div className={cart.containerOll}>
				<h2 className={cart.ollTitle}>{TOTAL_CONST}</h2>
				<span className={cart.ollPrices}>{total} $</span>
			</div>
		</div>
	)
}