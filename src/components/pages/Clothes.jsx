import React from 'react';
import '../../wrapper.scss'
import { Nav } from './../../common/Buttons';
import clothes from '../../modules/clothes.module.scss'

const Clothes = (props) => {
	return (
		<section className={clothes.clothes}>

			<Nav />

		</section>
	)
}
export default Clothes;