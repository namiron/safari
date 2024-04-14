import React from 'react';
import '../../wrapper.scss'
import { Nav, Up } from './../../common/Buttons';
import clothes from '../../modules/clothes.module.scss'
import { CLOTHES } from '../../common/constants';
import Filters from '../../construction/Filters/Filters';


const Clothes = ({ productList, searchList }) => {
	//-----------------------------------------
	const clothesList = productList.filter(el => el.group === CLOTHES)
	console.log('clothesList:');
	//-----------------------------------------

	return (
		<section className={clothes.clothes}>
			<div className={clothes.container}>
				<Nav />
				<Up />
				<div className={clothes.heading}>
					<h1 className={clothes.title}>{CLOTHES}</h1>
				</div>
				<Filters productList={productList} clothesList={searchList.length > 0 ? searchList : clothesList} />
			</div>
		</section>
	)
}
export default Clothes;