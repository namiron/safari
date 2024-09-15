import React, { useState } from 'react'
import CarouselItem from '../Slider/Carousel'
import tab from '../../modules/tabs.module.scss'
import { TbHanger } from "react-icons/tb";
import { Buy, ToFavorite } from '../../common/Buttons';
import { Facebook, Instagram, Twitter } from '../Links';
import visa from '../../image/visa-cart.png';
import payPal from '../../image/pay-pal.png'
import { useDispatch } from 'react-redux'
import masterCart from '../../image/master-card.png';
import {
    BUSINESS_DAYS, COLOR, DELIVERY, EXPRESS_DELIVERY,
    FREE_TEXT_DELIVERY, HOW_MUCH, LONG_CONST, PICK_DELIVERY, PRICE_ITEMS, RETURN_CONST, SHARE,
    SIZE_CHART, SIZE_CONST, STANDARD_DELIVERY, TYPE_CONST
} from '../../common/constants';
import StarsRating from '../starsRating/StarsRating';
import { addToCartForUserProduct } from '../../redux/reducers/userSlice';
import { discount, useCustomCountHook, useCustomCurrentUser } from '../../hooks/untils';
import CountComponent from '../count/CountComponent';




const TabOne = ({ image = [], size = [], color = [], price, id, rating, title }) => {

    //--------------------------------------

    const [sizeItem, setSizeItem] = useState(null)
    const [colorItem, setColorItem] = useState(null)
    const [item, setItem] = useState({})
    const dispatch = useDispatch()
    const currentUser = useCustomCurrentUser()

    const { count, handleCountMinus, handleCountPlus } = useCustomCountHook()

    //---------------------------
    const createItem = () => {
        const updatedItem = {
            id: id,
            size: sizeItem,
            color: colorItem,
            count: count,
            image: image[0],
            price: result,
            title: title
        };
        setItem(prevItem => ({
            ...prevItem,
            [id]: updatedItem
        }));

        if (currentUser) {
            dispatch(addToCartForUserProduct({ item: updatedItem, currentUser }));
        }
        setSizeItem(null)
        setColorItem(null)
    };

    const createFavoriteItem = () => {
        const updatedItem = {
            id: id,
            size: sizeItem,
            color: colorItem,
            count: count,
            image: image[0],
            price: result,
            title: title
        };
        setItem(prevItem => ({
            ...prevItem,
            [id]: updatedItem
        }));

        setSizeItem(null)
        setColorItem(null)
    };



    const handleSizeItemClick = (selectedSize) => {
        setSizeItem(selectedSize);
    };

    const handleSColorItemClick = (selectedSize) => {
        setColorItem(selectedSize);
    };
    //---------------------------

    const [result, percent] = discount(price)

    //--------------------------------------


    return (
        <div className={tab.wrapper}>
            <div className={tab.swiper}>
                <CarouselItem image={image} />
            </div>
            <div className={tab.description}>
                <div className={tab.holder}>
                    <div className={tab.priceRatingBox}>
                        <div className={tab.priceDiscountBox}>
                            <span className={tab.newPrice}>{result}$</span>
                            <span className={tab.oldPrice}>{price}$</span>
                            <div className={tab.discount}>{percent}%</div>
                        </div>
                        <div className={tab.ratingBox}>
                            <StarsRating count={5} id={id} rating={rating} />
                        </div>
                    </div>
                    <div className={tab.colorBox}>
                        <div className={tab.headingColor}>
                            <h3 className={tab.titleColorBlock}>{COLOR}</h3>
                        </div>
                        <div className={tab.colorRow}>
                            {
                                color.map((el, i) => {
                                    let colorName = el.toUpperCase();
                                    return (
                                        <div key={i} onClick={() => handleSColorItemClick(el)} className={`${tab.colorElement} ${el === colorItem ? tab.activeColor : ''}`}>
                                            <span style={{
                                                background: `${colorName}`,
                                                width: '10px',
                                                height: '18px',
                                                paddingRight: '20px'
                                            }} className={tab.colorBlock}></span>
                                            <span className={tab.colorName}>{el}</span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className={tab.sizeBox}>
                        <div className={tab.headingSize}>
                            <h3 className={tab.titleSize}>{SIZE_CONST}</h3>
                        </div>
                        <div className={tab.sizeRow}>
                            {
                                size.map((el, i) => {
                                    return <span className={`${tab.sizeElement} ${el === sizeItem ? tab.activeSize : ''}`} onClick={() => handleSizeItemClick(el)} key={i} >{el}</span>
                                })
                            }
                            {/* <div className={tab.sizeIcon}><TbHanger /> <span className={tab.sizeText}>{SIZE_CHART}</span></div> */}
                        </div>

                    </div>

                    <div className={tab.countContainer}>
                        <div className={tab.countInner}>
                            <CountComponent handleCountMinus={handleCountMinus} handleCountPlus={handleCountPlus} count={count} />
                            <Buy callback={createItem} />
                            <ToFavorite callback={createFavoriteItem} />
                        </div>
                    </div>
                    <div className={tab.delivery}>
                        <div className={tab.headingDelivery}>
                            <h3 className={tab.title}>{DELIVERY}</h3>
                        </div>
                        <div className={tab.deliveryInner}>
                            <p className={tab.deliveryText}>{FREE_TEXT_DELIVERY[0]}</p>
                            <div className={tab.deliveryContainer}>
                                <div className={tab.typesList}>
                                    <span className={tab.typeItem}>{TYPE_CONST}</span>
                                    <span className={tab.typeItem}>{LONG_CONST}</span>
                                    <span className={tab.typeItem}>{HOW_MUCH}</span>
                                </div>
                                <div className={tab.deliveryListRow}>
                                    <span className={tab.deliveryItem}>{STANDARD_DELIVERY}</span>
                                    <span className={tab.deliveryItem}>{BUSINESS_DAYS[0]}</span>
                                    <span className={tab.deliveryItem} >{PRICE_ITEMS[0]}</span>
                                </div>
                                <div className={tab.deliveryListRow}>
                                    <span className={tab.deliveryItem} >{EXPRESS_DELIVERY}</span>
                                    <span className={tab.deliveryItem}>{BUSINESS_DAYS[1]}</span>
                                    <span className={tab.deliveryItem} >{PRICE_ITEMS[1]}</span>
                                </div>
                                <div className={tab.deliveryListRow}>
                                    <span className={tab.deliveryItem} >{PICK_DELIVERY}</span>
                                    <span className={tab.deliveryItem}>{BUSINESS_DAYS[2]}</span>
                                    <span className={tab.deliveryItem} >{PRICE_ITEMS[2]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={tab.return}>
                        <div className={tab.headingReturn}>
                            <h3 className={tab.returnTitle}>{RETURN_CONST}</h3>
                        </div>
                        <div className={tab.returnInner}>
                            <p className={tab.returnText}>{FREE_TEXT_DELIVERY[1]}</p>
                            <ul className={tab.returnList}>
                                <li className={tab.returnItem}>{FREE_TEXT_DELIVERY[2]}</li>
                                <li className={tab.returnItem}>{FREE_TEXT_DELIVERY[3]}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={tab.share}>
                        <h3 className={tab.shareText}>{SHARE}</h3>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                    <div className={tab.pays}>
                        <img src={visa} alt={tab.visa} />
                        <img src={payPal} alt={tab.payPal} />
                        <img src={masterCart} alt={tab.masterCart} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabOne;