import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../construction/Image';
import itemCategory from '../../modules/itemCategory.module.scss';

const ItemCategory = ({ image, text, name }) => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className={itemCategory.itemBody}>
			<Link to={`/${name}`} className={itemCategory.boxImage} onClick={handleClick}>
				<Image classNameBox='imageBox' image={image} />
				<div className={itemCategory.contentBox}>
					<h3 className={itemCategory.text}>{text}</h3>
				</div>
			</Link>
		</div>
	);
};

export default ItemCategory;
