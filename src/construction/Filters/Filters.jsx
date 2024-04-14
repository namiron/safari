import React, { useState, useRef } from 'react';
import filterStyles from '../../modules/filterStyles.module.scss';
import ProductList from '../../components/ProductList/ProductList';
import Accordion from './../accordion/accordion';
import { faqCategory, faqColor, faqPrice, faqSize } from './../accordion/accordionData';
import AccordionItem from './../accordion/accordionItem';
import AccordionItemWidthInput from './../accordion/accordionItemWidthInput';
import AccordionItemWidthColor from '../accordion/accordionItemWidthColor';
import AccordionItemWidthSize from '../accordion/accordionItemWidthSize';
import { CustomSelect } from './../select/Select';
import { options } from '../../common/constants';

const Filters = ({ productList, clothesList }) => {
	const [filterProductList, setFilterProductList] = useState([]);
	const productListWrapperRef = useRef(null);
	console.log('productListWrapperRef:', productListWrapperRef);

	const handleFilterChange = (filterArray) => {
		setFilterProductList(filterArray);
	}

	return (
		<div className={filterStyles.clothesBody}>
			<div className={filterStyles.clothesFilters}>
				<div className={filterStyles.clothesFiltersItemBody}>
					<Accordion faqList={faqCategory} handleFilterChange={handleFilterChange} productList={productList}>
						<AccordionItem productListWrapperRef={productListWrapperRef} />
					</Accordion>
					<Accordion faqList={faqSize} handleFilterChange={handleFilterChange} productList={productList}>
						<AccordionItemWidthSize />
					</Accordion>
					<Accordion faqList={faqColor} handleFilterChange={handleFilterChange} productList={productList}>
						<AccordionItemWidthColor />
					</Accordion>
					<Accordion faqList={faqPrice} handleFilterChange={handleFilterChange} productList={productList}>
						<AccordionItemWidthInput />
					</Accordion>
				</div>
			</div>
			<div className={filterStyles.clothesList}>
				<div className={filterStyles.clothesListSelectBody}>
					<CustomSelect options={options} placeholder='Sort by:' isClearable isSearchable={false} />
				</div>
				<div className={filterStyles.listBodyWrapper} ref={productListWrapperRef}>
					<ProductList array={filterProductList.length ? filterProductList : clothesList} />
				</div>
			</div>
		</div>
	)
}

export default Filters;
