import React, { useState } from 'react';
import clothes from '../../modules/clothes.module.scss'
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
	//--------------------------
	const [filterProductList, setFilterProductList] = useState([])
	console.log(filterProductList);
	const handleFilterChange = (filterArray) => {
		setFilterProductList(filterArray)
	}
	//--------------------------

	return (
		<div className={clothes.clothesBody}>
			<div className={clothes.clothesFilters}>
				<div className={clothes.clothesFiltersItemBody}>
					<Accordion faqList={faqCategory} handleFilterChange={handleFilterChange} productList={productList}>
						<AccordionItem />
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
			<div className={clothes.clothesList}>
				<div className={clothes.clothesListSelectBody}>
					<CustomSelect options={options} placeholder='Sort by:' isClearable isSearchable={false} />
				</div>
				<div className={clothes.listBodyWrapper}>
					<ProductList array={filterProductList.length ? filterProductList : clothesList} />
				</div>
			</div>
		</div>
	)
}
export default Filters;