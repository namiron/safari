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
import { PRICE_HIGHT_TO_LOW, PRICE_LOW_TO_HIGHT, options } from '../../common/constants';

const Filters = ({ productList, clothesList, handleCloseWindow }) => {
	//--------------------------------------------------
	const [filterProductList, setFilterProductList] = useState([]);
	const productListWrapperRef = useRef(null);
	const handleFilterChange = (filterArray) => {
		setFilterProductList(filterArray);
	}
	const [select, setSelect] = useState('')

	const handleSelect = (select, clothesList) => {
		let newSelectArray = [...clothesList];
		if (select.value === PRICE_HIGHT_TO_LOW) {
			newSelectArray = clothesList.sort((a, b) => b.price - a.price);
		} else if (select.value === PRICE_LOW_TO_HIGHT) {
			newSelectArray = clothesList.sort((a, b) => a.price - b.price);
		}
		return newSelectArray;
	}

	const resultOllFilters = handleSelect(select, clothesList);
	//--------------------------------------------------


	return (
		<div className={filterStyles.clothesBody}>
			<div className={filterStyles.clothesFilters}>
				<div className={filterStyles.clothesFiltersItemBody}>
					<Accordion faqList={faqCategory} handleFilterChange={handleFilterChange} productList={clothesList}>
						<AccordionItem productListWrapperRef={productListWrapperRef} />
					</Accordion>
					<Accordion faqList={faqSize} handleFilterChange={handleFilterChange} productList={clothesList}>
						<AccordionItemWidthSize productListWrapperRef={productListWrapperRef} />
					</Accordion>
					<Accordion faqList={faqColor} handleFilterChange={handleFilterChange} productList={clothesList}>
						<AccordionItemWidthColor productListWrapperRef={productListWrapperRef} />
					</Accordion>
					<Accordion faqList={faqPrice} handleFilterChange={handleFilterChange} productList={clothesList}>
						<AccordionItemWidthInput />
					</Accordion>
				</div>
			</div>
			<div className={filterStyles.clothesList}>
				<div className={filterStyles.clothesListSelectBody}>
					<CustomSelect
						options={options}
						placeholder='Sort by:'
						isSearchable={false}
						value={select}
						onChange={setSelect} />
				</div>
				<div className={filterStyles.listBodyWrapper} ref={productListWrapperRef}>
					<ProductList array={filterProductList.length ? filterProductList : resultOllFilters} handleCloseWindow={handleCloseWindow} />
				</div>
			</div>
		</div>
	)
}

export default Filters;
