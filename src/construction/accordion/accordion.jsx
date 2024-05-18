import React, { cloneElement } from 'react';
import accordion from './accordion.module.scss';

const Accordion = ({ faqList, children, handleFilterChange, productList }) => {
	return (
		<ul className={accordion.accordionList}>
			{faqList.map((faqItem, id) => (
				cloneElement(children, { faqItem, key: id, handleFilterChange, productList })
			))}
		</ul>
	);
};

export default Accordion;