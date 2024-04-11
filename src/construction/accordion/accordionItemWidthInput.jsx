import React, { useState } from 'react';
import accordion from './accordion.module.scss';
import AccurateFilterPrice from './../../common/AccurateFilterPrice';

const AccordionItemWidthInput = ({ faqItem, id, handleFilterChange, productList }) => {
	//----------------------------------------------------
	const [openId, setOpenId] = useState(null);

	const clickAccordion = (id) => {
		setOpenId(openId === id ? null : id);
	};

	const filterForPrice = (priceItem) => {
		const id = priceItem
		let filterPrice = []
		if (id === 1) {
			filterPrice = productList.filter(el => el.price <= 100)
		} else if (id === 2) {
			filterPrice = productList.filter(el => (el.price >= 100 && el.price <= 1000))
		} else if (id === 3) {
			filterPrice = productList.filter(el => (el.price >= 1000 && el.price <= 5000))
		} else if (id === 4) {
			filterPrice = productList.filter(el => (el.price >= 5000 && el.price <= 10000))
		}
		handleFilterChange(filterPrice)
	}
	//----------------------------------------------------
	return (
		<li className={accordion.accordionItem}>
			<button className={accordion.button} onClick={() => clickAccordion(id)}>
				<span>{faqItem.question}</span>
			</button>
			<div className={`${accordion.accordionCollapse} ${id === openId ? accordion.open : ''}`}>
				<div className={`${accordion[faqItem.className]}`}>
					{Array.isArray(faqItem.answer) && faqItem.answer.map((el, index) => (
						<div className={accordion.inner} key={index}>
							<div onClick={() => filterForPrice(el.id)} className={accordion.boxInput}>
								<input id={`price-${index}`} type='checkbox'></input>
							</div>
							<label htmlFor={`price-${index}`} className={`${accordion[faqItem.question.toLowerCase()]}`}>
								{el.filter}
							</label>
						</div>
					))}
					<AccurateFilterPrice handleFilterChange={handleFilterChange} productList={productList} />
				</div>
			</div>
		</li>
	);
};

export default AccordionItemWidthInput;
