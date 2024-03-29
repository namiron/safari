import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../construction/Image';
import { AddToCart, FavoriteBtn } from './../../common/Buttons';
import global from '../../modules/global.module.scss';
import product from '../../modules/products.module.scss';

export const ProductItem = ({ image, title, price }) => {

	return (
		<div className={product.itemBody}>
			<div className={product.boxImage}>
				<Link to='/item_details'>
					<div className={product.curtain}>
						<div className={product.box}>
							<FavoriteBtn />
							<AddToCart />
						</div>
					</div>
				</Link>
				<Image classNameBox='imageBox' image={image[0]} />
			</div>
			<div className={product.contentBox}>
				<h2 className={global.text}>{title === undefined ? 'Red lightweight gown' : title}</h2>
				<h3 className={global.text}>{`${price === undefined ? '10.000' : price}$`}</h3>
			</div>
		</div>
	);
};