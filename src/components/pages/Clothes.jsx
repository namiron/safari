import React from 'react';
import '../../wrapper.scss'
<<<<<<< HEAD
import { Nav } from './../../common/Buttons';
import clothes from '../../modules/clothes.module.scss'
=======
import { Nav, Up } from './../../common/Buttons';
import clothes from '../../modules/clothes.module.scss'
import { CLOTHES } from '../../common/constants';
import Filters from '../../construction/Filters/Filters';


const Clothes = ({ productList }) => {
	//-----------------------------------------
	const clothesList = productList.filter(el => el.group === CLOTHES)
	console.log('clothesList:');
	//-----------------------------------------

>>>>>>> clothes

	return (
		<section className={clothes.clothes}>
<<<<<<< HEAD

			<Nav />

=======
			<div className={clothes.container}>
				<Nav />
				<Up />
				<div className={clothes.heading}>
					<h1 className={clothes.title}>{CLOTHES}</h1>
				</div>
				<Filters productList={productList} clothesList={clothesList} />
			</div>
>>>>>>> clothes
		</section>
	)
}
export default Clothes;