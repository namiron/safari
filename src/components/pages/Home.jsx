import React from "react";
import home from "../../modules/home.module.scss";
import ProductList from "./../ProductList/ProductList";
import Slider from "../../construction/Slider/Slider";
import { EXPLORE_MORE_ARRAY, TITLE } from "../../common/constants";
import { SUB_TITLE } from "./../../common/constants";
import ItemCategory from "../ProductList/ItemCategory";
import { Link as ScrollLink } from "react-scroll";

const Home = ({ productList, searchList, handleCloseWindow }) => {
  return (
    <>
      <section className={home.home}>
        <div className={home.slider}>
          <Slider />
        </div>
        <div className={home.container}>
          <div className={home.heading}>
            <h1 className={home.title}>{TITLE}</h1>
            <h3 className={home.subTitle}>{SUB_TITLE}</h3>
          </div>
          <ProductList
            array={searchList.length > 0 ? searchList : productList}
            handleCloseWindow={handleCloseWindow}
          />
          <div className={home.exploreCategory}>
            {EXPLORE_MORE_ARRAY.map((el, index) => (
              <ItemCategory
                key={index}
                image={el.image}
                text={el.name}
                name={el.name}
              />
            ))}
          </div>

          <div className={home.advertisingSlider}></div>
        </div>
      </section>
    </>
  );
};
export default Home;
