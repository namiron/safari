import React, { useState } from 'react';
import accordion from './accordion.module.scss';

const AccordionItem = ({ faqItem, id, handleFilterChange, productList, productListWrapperRef }) => {
	const [openId, setOpenId] = useState(null);

	const clickAccordion = (id) => {
		setOpenId(openId === id ? null : id);
	};
	const handleFilterCategory = (category) => {
		const filterProduct = productList.filter(el => el.category === category);
		handleFilterChange(filterProduct);

		if (window.innerWidth < 425) {
			setOpenId(null);
			if (productListWrapperRef.current) {
				const productListOffset = productListWrapperRef.current.offsetTop + productListWrapperRef.current.offsetHeight;
				const headerHeight = document.querySelector('header').offsetHeight;
				const scrollToOffset = productListOffset - headerHeight; 
				window.scrollTo({ top: scrollToOffset, behavior: 'smooth' });
			}
		}
	}
	return (
		<li className={accordion.accordionItem}>
			<button className={accordion.button} onClick={() => clickAccordion(id)}><span>{faqItem.question}</span></button>
			<div className={`${accordion.accordionCollapse} ${id === openId ? accordion.open : ''}`}>
				<div className={`${accordion[faqItem.className]}`}>
					{Array.isArray(faqItem.answer) && faqItem.answer.map((el, index) => (
						<p onClick={() => handleFilterCategory(el)} className={`${accordion[faqItem.question.toLowerCase()]}`} key={index}>{el}</p>
					))}
				</div>
			</div>
		</li>
	);
};
export default AccordionItem;
