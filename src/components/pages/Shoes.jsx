import React from 'react';
import '../../wrapper.scss'
import { Nav, Up } from './../../common/Buttons';
import shoes from '../../modules/shoes.module.scss'
import Filters from '../../construction/Filters/Filters';
import { SHOES_GROUP } from './../../common/constants';


const Shoes = ({ productList, searchList }) => {
	//-----------------------------------------
	const shoesList = productList.filter(el => el.group === SHOES_GROUP)
	//-----------------------------------------


	return (
		<section className={shoes.clothes}>
			<div className={shoes.container}>
				<Nav />
				<Up />
				<div className={shoes.heading}>
					<h1 className={shoes.title}>{SHOES_GROUP}</h1>
				</div>
				<Filters productList={productList} clothesList={searchList.length > 0 ? searchList : shoesList} />
			</div>
		</section>
	)
}
export default Shoes;