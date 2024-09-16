import React, { useState } from "react";
import { ITEMS_PER_PAGE } from "../../common/constants";
import product_list from "../../modules/productList.module.scss";
import ProductItem from "./ProductItem";

const ProductList = ({ array, handleCloseWindow }) => {
  //----------------------------------------------------------const
  const FIRST_PAGE = 1;
  const totalItems = array.length;
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  //----------------------------------------------------------const

  //-------------------------------------------function
  const displayItemsOnPage = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const itemsToShow = array.slice(startIndex, endIndex);
    return (
      <>
        {itemsToShow.map(({ image, title, price, id }) => {
          return (
            <ProductItem
              image={image}
              title={title}
              price={price}
              id={id}
              key={id}
              handleCloseWindow={handleCloseWindow}
            />
          );
        })}
      </>
    );
  };
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
    setCurrentPage(pageNumber);
  };
  //-------------------------------------------function

  return (
    <>
      <div className={product_list.productListBody}>
        <div className={product_list.productListHolder}>
          {displayItemsOnPage()}
        </div>
        <div className={product_list.paginationRow}>
          <button
            onClick={goToPreviousPage}
            className={product_list.paginationArrowPrevios}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <button
                className={product_list.paginationNumber}
                key={i}
                onClick={() => handleClickPage(i + 1)}
                disabled={i + 1 === currentPage}
              >
                {i + 1}
              </button>
            );
          })}
          <button
            onClick={goToNextPage}
            className={product_list.paginationArrowNext}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductList;
