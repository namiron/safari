import React, { useState } from 'react';
import filter from '../modules/accurateFilterPrice.module.scss'
import { APPLY } from './constants';

const AccurateFilterPrice = ({ handleFilterChange, productList }) => {
	//----------------------------------------------------------
	const [valueFirst, setValueFirst] = useState('')
	const [valueSecond, setValueSecond] = useState('')
	const findRightPrice = (valueFirst, valueSecond) => {
		const findArray = productList.filter(el => (el.price >= valueFirst && el.price <= valueSecond))
		handleFilterChange(findArray)
	}


	//----------------------------------------------------------

	return (
		<div className={filter.accurateFilterPrice}>
			<div className={filter.inputBox}>
				<input type="text" value={valueFirst} placeholder='100$' onChange={(e) => setValueFirst(e.target.value)} />
			</div>
			<span className={filter.to}>to</span>
			<div className={filter.inputBox}>
				<input type="text" value={valueSecond} placeholder='1000$' onChange={(e) => setValueSecond(e.target.value)} />
			</div>
			<button onClick={() => findRightPrice(valueFirst, valueSecond)} className={filter.apply}>{APPLY}</button>
		</div>
	)
}
export default AccurateFilterPrice;