import React from 'react';
import { AddToCart, LogButton, Nav, Remove } from './../../common/Buttons';
import { useCustomCurrentUser } from '../../hooks/untils';
import favorite from '../../modules/favorite.module.scss'
import { ImFilesEmpty } from 'react-icons/im';
import { removeFromFavoritePage, } from '../../redux/reducers/userSlice';

const Favorite = ({ handleCloseWindow }) => {
	//---------------------------------------------
	const currentUser = useCustomCurrentUser()
	//---------------------------------------------
	return (
		<section>
			{currentUser ? <FavoriteWithUser /> : <FavoriteWithoutUser handleCloseWindow={handleCloseWindow} />}
		</section>
	)
}
export default Favorite;







export const FavoriteWithoutUser = ({ handleCloseWindow }) => {


	return (
		<section>
			<div className={favorite.favoriteWithoutUserWrapper}>
				<div className={favorite.container}>
					<div className={favorite.navigation}>
						<Nav />
					</div>
					<div className={favorite.content}>
						<div className={favorite.imageWithoutUser}>
							<ImFilesEmpty className={favorite.iconWithoutUser} />
							<p className={favorite.textWithoutUser} ></p>
						</div>
						<p className={favorite.textWithoutUser} >You don't have Favorite product.  Please <LogButton handleCloseWindow={handleCloseWindow} />to add the product in to favorite</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export const FavoriteWithUser = () => {
	//------------------------------------
	const currentUser = useCustomCurrentUser()
	//-------------------------------------

	return (
		<>
			<div className={favorite.favoriteWithUser}>
				<div className={favorite.navigation}>
					<Nav />
				</div>
				<div className={favorite.container}>
					<div className={favorite.heading}>
						<h2 className={favorite.favoriteTitle}>My Favorite <span>{currentUser.favorite.length}</span></h2>
					</div>
					<div className={favorite.content}>
						<ul className={favorite.favoriteList}>
							{currentUser && currentUser.favorite.length > 0 && currentUser.favorite.map(({ id, image, title, price }) => {
								return < FavoriteItem key={id} id={id} image={image} title={title} price={price} />

							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export const FavoriteItem = ({ id, image, title, price }) => {

	//------------------------------------------
	const currentUser = useCustomCurrentUser()

	const userId = currentUser.id

	//------------------------------------------
	return (

		<li className={favorite.favoriteItem}>
			<div className={favorite.containerItem}>
				<div className={favorite.topRow}>
					<div className={favorite.headItem}>
						<div className={favorite.imageBox}>
							<img src={image} alt={image} />
						</div>
					</div>
					<div className={favorite.bodyItem}>
						<div className={favorite.titleOfProductHeading}>
							<h2 className={favorite.titleOfProduct}>{title}</h2>
						</div>
						<div className={favorite.priceNumber}>
							<div className={favorite.priceSpan} > <span className={favorite.text}>Price:</span>
								<span className={favorite.price}> {price} $</span> </div>
						</div>
					</div>
				</div>
				<div className={favorite.buttons}>
					<AddToCart ways={`/item_details/${id}`} />
					<Remove productId={id} callback={removeFromFavoritePage} userId={userId} />
				</div>
			</div>
		</li>
	)
}