import React from 'react';
import '../../wrapper.scss'
import clothes from '../../modules/clothes.module.scss'
import { Nav } from './../../common/Buttons';
import { CLOTHES } from '../../common/constants';
import Filters from '../../construction/Filters/Filters';


const Clothes = ({ productList, searchList, handleCloseWindow }) => {
	//-----------------------------------------
	const clothesList = productList.filter(el => el.group === CLOTHES)
	//-----------------------------------------

	return (
		<section className={clothes.clothes}>
			<div className={clothes.container}>
				<Nav />
				<div className={clothes.heading}>
					<h1 className={clothes.title}>{CLOTHES}</h1>
				</div>
				<Filters productList={productList} clothesList={searchList.length > 0 ? searchList : clothesList} handleCloseWindow={handleCloseWindow} />
			</div>
		</section>
	)
}
export default Clothes;