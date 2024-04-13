import React from 'react';
import { useParams } from 'react-router-dom';
import { Nav, AddToCart, FavoriteBtn } from './../../common/Buttons';
import { BASE_URL } from './../../common/constants';
import ItemSlider from './../../construction/Slider/ItemSlider';
import details from '../../modules/details.module.scss'

const ItemDetails = () => {
	//------------------------------------------
	const { id } = useParams();
	const [item, setItem] = React.useState(null)

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${BASE_URL}/${id}`);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await response.json();
				setItem(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, [id]);

	const { image = [], title, group, size = [], color = [], price = [], category } = item || {};
	//------------------------------------------


	return (
		<section className={details.detailsItem} >
			<div className={details.detailsContainer}>
				<Nav />
				<div className={details.heading}>
					<h1 className={details.title}>{title}</h1>
				</div>
				<div className={details.detailsWrapper}>
					<div className={details.detailsSlider}>
						<ItemSlider image={image} />
					</div>
					<article className={details.detailsInfo}>
						<div className={details.infoContainer}>
							<div className={details.heading}>
								<h2 className={details.title}>product description</h2>
							</div>
							<div className={details.colorBox}>
								<div className={details.colorsHeading}>
									<h2 className={details.titleColors}>Colors</h2>
								</div>
								{color.map((el, i) => {
									return <div key={i} className={details.colorRow}>
										<span className={details.box} style={{ background: `${el}` }}></span>
										<span className={details.colorElement} >{el}</span>
									</div>
								})}
							</div>
							<div className={details.sizeBox}>
								<div className={details.sizeHeading}>
									<h2 className={details.titleSize}>size</h2>
								</div>
								<div className={details.sizeRow}>
									{size.map((el, i) => {
										return <span key={i} className={details.sizeElement}>{el}</span>
									})}
								</div>
							</div>
							<div className={details.priceBox}>
								<div className={details.priceHeading}>
									<h2 className={details.titlePrice}>price:</h2>
									<span className={details.price}>{price}$</span>
								</div>
								<div className={details.btnBox}>
									<FavoriteBtn />
									<AddToCart />
								</div>
							</div>
						</div>

					</article>
				</div>
			</div>
		</section>
	);
};

export default ItemDetails;
