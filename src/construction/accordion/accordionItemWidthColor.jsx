import React, { useState } from 'react';
import accordion from './accordion.module.scss';

const AccordionItemWidthColor = ({ faqItem, id, productList, handleFilterChange }) => {
	const [openId, setOpenId] = useState(null);

	const clickAccordion = (id) => {
		setOpenId(openId === id ? null : id);
	};

	const filterForColor = (element) => {
		const filteredColor = productList.filter(el => el.color.includes(element))
		handleFilterChange(filteredColor)
	}

	return (
		<li className={accordion.accordionItem}>
			<button className={accordion.button} onClick={() => clickAccordion(id)}>
				<span>{faqItem.question}</span>
			</button>
			<div className={`${accordion.accordionCollapse} ${id === openId ? accordion.open : ''}`}>
				<div className={`${accordion[faqItem.className]}`}>
					{Array.isArray(faqItem.answer) && faqItem.answer.map((el, index) => (
						<div onClick={() => filterForColor(el)} className={accordion.inner} key={index}>
							<div className={accordion.boxColor} style={{ background: `${faqItem.answer[index]}` }}></div>
							<p className={`${accordion[faqItem.question.toLowerCase()]}`}>{el}</p>
						</div>
					))}
				</div>
			</div>
		</li>
	);
};

export default AccordionItemWidthColor;
