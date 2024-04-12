import React from 'react';
import home from '../../modules/home.module.scss'
import ProductList from './../ProductList/ProductList';
import Slider from '../../construction/Slider/Slider';
import { TITLE } from '../../common/constants';
import { SUB_TITLE } from './../../common/constants';


const Home = ({ productList }) => {


  return (
    <>
      <section className={home.home}>
        <div className={home.slider}>
          <Slider />
        </div>
        <div className={home.container}>
          <div className={home.heading}>
            <h1 className={home.title}>{TITLE}</h1>
            <h3 className={home.subTitle}>
              {SUB_TITLE}
            </h3>
          </div>
          <ProductList array={productList} />
        </div>
      </section>
    </>
  )

}
export default Home;