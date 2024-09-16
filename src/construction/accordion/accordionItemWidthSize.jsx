import React, { useState } from "react";
import accordion from "./accordion.module.scss";
import { SIZE_ARRAY } from "../../common/constants";

const AccordionItemWidthSize = ({
  faqItem,
  id,
  productList,
  handleFilterChange,
  productListWrapperRef,
}) => {
  //------------------------------------------------
  const [openId, setOpenId] = useState(null);

  const filterForSize = (element) => {
    const filteredSize = productList.filter((el) => el.size.includes(element));
    handleFilterChange(filteredSize);
  };

  const clickAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleFilterCategory = (category) => {
    const filterProduct = productList.filter((el) => el.category === category);
    handleFilterChange(filterProduct);

    if (window.innerWidth < 425) {
      setOpenId(null);
      if (productListWrapperRef.current) {
        const productListOffset =
          productListWrapperRef.current.offsetTop +
          productListWrapperRef.current.offsetHeight;
        window.scrollTo({ top: productListOffset, behavior: "smooth" });
      }
    }
  };
  //------------------------------------------------

  return (
    <li className={accordion.accordionItem}>
      <button className={accordion.button} onClick={() => clickAccordion(id)}>
        <span>{faqItem.question}</span>
      </button>
      <div
        className={`${accordion.accordionCollapse} ${
          id === openId ? accordion.open : ""
        }`}
      >
        <div className={`${accordion[faqItem.className]}`}>
          {Array.isArray(faqItem.answer) &&
            faqItem.answer.map((el, index) => (
              <div
                onClick={() => filterForSize(el)}
                className={accordion.inner}
                key={index}
              >
                <p
                  onClick={() => handleFilterCategory(el)}
                  className={`${accordion[faqItem.question.toLowerCase()]}`}
                >
                  {el}
                </p>
              </div>
            ))}
        </div>
      </div>
    </li>
  );
};

export default AccordionItemWidthSize;
