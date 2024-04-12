import React from 'react';
import '../../wrapper.scss'
import { Nav, Up } from './../../common/Buttons';
import accessories from '../../modules/accessories.module.scss'
import Filters from '../../construction/Filters/Filters';
import { ACCESSORIES_GROUP } from './../../common/constants';


const Accessories = ({ productList }) => {
	//-----------------------------------------
	const AccessoriesList = productList.filter(el => el.group === ACCESSORIES_GROUP)
	//-----------------------------------------


	return (
		<section className={accessories.clothes}>
			<div className={accessories.container}>
				<Nav />
				<Up />
				<div className={accessories.heading}>
					<h1 className={accessories.title}>{ACCESSORIES_GROUP}</h1>
				</div>
				<Filters productList={productList} clothesList={AccessoriesList} />
			</div>
		</section>
	)
}

export default Accessories;