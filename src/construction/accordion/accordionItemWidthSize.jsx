import React, { useState } from 'react';
import accordion from './accordion.module.scss';

const AccordionItemWidthSize = ({ faqItem, id, productList, handleFilterChange }) => {
	//------------------------------------------------
	const [openId, setOpenId] = useState(null);

	const filterForSize = (element) => {
		const filteredSize = productList.filter(el => el.size.includes(element))
		handleFilterChange(filteredSize)
	}
	const clickAccordion = (id) => {
		setOpenId(openId === id ? null : id);
	};
	//------------------------------------------------

	return (
		<li className={accordion.accordionItem}>
			<button className={accordion.button} onClick={() => clickAccordion(id)}>
				<span>{faqItem.question}</span>
			</button>
			<div className={`${accordion.accordionCollapse} ${id === openId ? accordion.open : ''}`}>
				<div className={`${accordion[faqItem.className]}`}>
					{Array.isArray(faqItem.answer) && faqItem.answer.map((el, index) => (
						<div onClick={() => filterForSize(el)} className={accordion.inner} key={index}>
							<p className={`${accordion[faqItem.question.toLowerCase()]}`}>{el}</p>
						</div>
					))}
				</div>
			</div>
		</li>
	);
};

export default AccordionItemWidthSize;
