import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from './../../common/Buttons';
import { BASE_URL } from './../../common/constants';
import details from '../../modules/details.module.scss'
import Tabs from '../../construction/Tabs/Tabs';


const ItemDetails = () => {
	//------------------------------------------
	const { id } = useParams();
	const [item, setItem] = useState(null)

	useEffect(() => {
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

	const { image = [], title, size = [], color = [], price = [], rating, comments } = item || {};


	//------------------------------------------


	return (
		<section className={details.detailsItem} >
			<div className={details.detailsContainer}>
				<div className={details.heading}>
					<h1 className={details.title}>{title}</h1>
				</div>
				<Nav />
				<div className={details.tabsContent}>
					<Tabs image={image} size={size} color={color} price={price} id={id} rating={rating} comments={comments} title={title} />
				</div>

			</div>
		</section>
	);
};

export default ItemDetails;
