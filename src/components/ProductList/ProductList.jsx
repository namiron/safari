import React, { useState } from 'react';
import { useCustomProductList, useExportAllProducts } from './../../hooks/untils';
import { ITEMS_PER_PAGE } from '../../common/constants';
import product_list from '../../modules/productList.module.scss'
import ProductItem from './ProductItem';


const ProductList = (props) => {
	const FIRST_PAGE = 1
	useExportAllProducts()
	const [isLoading, productList, error] = useCustomProductList()

	//----------------------------------------------------------const
	const totalItems = productList.length
	const [currentPage, setCurrentPage] = useState(FIRST_PAGE)
	const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
	//----------------------------------------------------------const

	//-------------------------------------------function
	const displayItemsOnPage = () => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;
		const itemsToShow = productList.slice(startIndex, endIndex)
		return (
			<>
				{
					itemsToShow.map(({ image, title, price, id }) => {
						return <ProductItem image={image} title={title} price={price} key={id} />
					})
				}
			</>
		)
	}
	const goToPreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const handleClickPage = (pageNumber) => {
		setCurrentPage(pageNumber)
	}
	//-------------------------------------------function

	return (
		<>
			<div className={product_list.productListBody}>
				<div className={product_list.productListHolder}>
					{displayItemsOnPage()}
				</div>
				<div className={product_list.paginationRow}>
					<button onClick={goToPreviousPage} className={product_list.paginationArrowPrevios} disabled={currentPage === 1}>
						{'<'}
					</button>
					{[...Array(totalPages)].map((_, i) => {
						return (<button className={product_list.paginationNumber} key={i} onClick={() => handleClickPage(i + 1)} disabled={i + 1 === currentPage} >{i + 1}</button>)
					})}
					<button onClick={goToNextPage} className={product_list.paginationArrowNext} disabled={currentPage === totalPages}>
						{'>'}
					</button>
				</div>
			</div>

		</>
	);
};
export default ProductList;