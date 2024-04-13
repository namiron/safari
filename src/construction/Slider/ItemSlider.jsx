import React from 'react';
import Flickity from 'react-flickity-component';
import './itemSlider.scss'
import sliderItem from '../../modules/sliderItem.module.scss'



const ItemSlider = ({ image = [], paginationImages = [] }) => {
	//-----------------------------------------
	const flickityOptions = {
		initialIndex: 0,
		pageDots: false,
	};
	//-----------------------------------------

	return (
		<div className={sliderItem.sliderBody}>
			<div className={sliderItem.container}>
				<Flickity
					className={'Slider'}
					elementType={'div'}
					disableImageLoaded={false}
					options={flickityOptions}
					reloadOnUpdate
					static
				>
					{image.map((img, i) => {
						return (
							<div key={i} className={sliderItem.slide}>
								<img src={img} alt={`Slide ${i}`} />
							</div>
						);
					})}
				</Flickity>
			</div>
			<PaginationImages paginationImages={paginationImages} flickity={Flickity} />
		</div>
	);
};

export default ItemSlider;

export const PaginationImages = ({ paginationImages, flickity }) => {
	return (
		<div className={sliderItem.pagination}>
			{paginationImages.map((image, index) => (
				<button
					key={index}
					className={sliderItem.paginationItem}
					onClick={() => flickity.select(index)}
				>
					<img src={image} alt={`Pagination ${index}`} />
				</button>
			))}
		</div>
	);
};