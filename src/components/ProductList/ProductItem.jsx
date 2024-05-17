import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../construction/Image';
import { AddToCart, AddToCartWithoutUser, FavoriteBtn, FavoriteBtnWithoutUser } from './../../common/Buttons';

import product from '../../modules/products.module.scss';
import { useCustomCurrentUser, } from '../../hooks/untils';



const ProductItem = ({ image, title, price, id, handleCloseWindow }) => {

	//---------------------------------------------

	const currentUser = useCustomCurrentUser()

//---------------------------------------------

	return (
		<div className={product.itemBody}>
			<div className={product.boxImage}>
				<div >
					<div className={product.curtain}>
						<div className={product.box}>

							{currentUser ? <FavoriteBtn image={image[0]} title={title} price={price} id={id} /> : <FavoriteBtnWithoutUser handleCloseWindow={handleCloseWindow} />}
							{currentUser ? <AddToCart ways={`/item_details/${id}`} /> : <AddToCartWithoutUser handleCloseWindow={handleCloseWindow} />}
						</div>
					</div>
					<Image classNameBox='imageBox' image={image[0]} />
				</div>
			</div>
			<Link to={`/item_details/${id}`} key={id} className={product.contentBox}>
				<h2 className={product.text}>{title === undefined ? 'Red lightweight gown' : title}</h2>
				<h3 className={product.text}>{`${price === undefined ? '10.000' : price}$`}</h3>
			</Link>
		</div>
	);
};

export default ProductItem;

