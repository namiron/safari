import React, { useState, useEffect } from 'react';
import { TotalProductsPrice, useCustomCurrentUser } from '../../hooks/untils';
import AddressForm from '../../construction/forms/AddressForm';
import { FaCheckCircle } from "react-icons/fa";
import shopDetails from '../../modules/shoppingDetails.module.scss';
import {
    CART_DISCOUNT, CART_SUB_TITLE,
    DELIVERY_DOOR, DELIVERY_METHOD, GET_TO_OFF_TOTAL,
    KINDLY_NOTE_THAT, NO_CONTENT_CONSTANT, ONCE_THE_SEAL_ID_BROKEN,
    ORDER_SUMMARY, PAYMENT_METHODS, PAY_ON_DELIVERY, PAY_WITH_CART,
    TOTAL, YOU_HAVE_TO_MAKE, YOU_WILL_BE_REDIRECTED
}
    from '../../common/constants';

const ShoppingDetails = () => {

    //----------------------------------------------
    const [purchase, setPurchase] = useState({ cart: [], userInfo: {} });
    const currentUser = useCustomCurrentUser();
    const total = TotalProductsPrice(currentUser ? currentUser.cart : []);

    useEffect(() => { }, [purchase]);

    const createAddressForUser = (data, array) => {
        setPurchase(prevPurchase => ({
            ...prevPurchase,
            cart: array.cart.map(({ image, title, size, price, color, count }) => ({
                image,
                title,
                size,
                price,
                color,
                count,
            })),
            userInfo: {
                email: data.email,
                name: data.name,
                address: data.address,
                city: data.city,
                number: data.number
            }
        }));
    };

    const createCheckForBy = () => {
        console.log(purchase);
        return purchase;
    };

    //----------------------------------------------

    return (
        <div className={shopDetails.shoppingDetails}>
            <div className={shopDetails.container}>
                <div className={shopDetails.detailsWrapper}>
                    <div className={shopDetails.shoppingAddressBox}>
                        <article className={shopDetails.orderSummaryBox}>
                            <div className={shopDetails.heading}>
                                <h2 className={shopDetails.title}>{ORDER_SUMMARY}</h2>
                            </div>
                            <div className={shopDetails.orderSummaryList}>
                                {currentUser?.cart?.length > 0 ? (
                                    currentUser.cart.map(({ image, title, size, price, color, count }) => (
                                        <div className={shopDetails.itemBlock} key={title + size + color}>
                                            <div className={shopDetails.itemWrapper}>
                                                <div className={shopDetails.imageBox}>
                                                    <img src={image} alt={title} />
                                                </div>
                                                <div className={shopDetails.contentBlock}>
                                                    <h2 className={shopDetails.titleItem}>{title}</h2>
                                                    <div className={shopDetails.infoRow}>
                                                        <p className={shopDetails.color}> color- {color}</p>
                                                        <p className={shopDetails.size}> size - {size}</p>
                                                    </div>
                                                    <div className={shopDetails.priceBlock}>
                                                        <p className={shopDetails.price}>{price} $</p>
                                                    </div>
                                                    <div className={shopDetails.countBlock}>
                                                        <p className={shopDetails.count}> count - {count}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className={shopDetails.noContent}>{NO_CONTENT_CONSTANT}</p>
                                )}
                            </div>
                            <div className={shopDetails.orderSummaryInfo}>
                                <div className={shopDetails.totalPriceBlock}>
                                    <p className={shopDetails.titlePrice}>{CART_SUB_TITLE}</p>
                                    <p className={shopDetails.totalPriceData}>{total}</p>
                                </div>
                                <div className={shopDetails.CardDiscountBox}>
                                    <p className={shopDetails.cardDiscount}>{CART_DISCOUNT}</p>
                                    <p className={shopDetails.cardDiscountData}>200$</p>
                                </div>
                            </div>
                            <div className={shopDetails.orderSummaryTotalBox}>
                                <h3 className={shopDetails.totalTitle}>{TOTAL}</h3>
                                <span className={shopDetails.totalTitle}>{total + 200} $</span>
                            </div>
                        </article>

                    </div>
                    <article className={shopDetails.payBox}>
                        <div className={shopDetails.deliveryBlock}>
                            <div className={shopDetails.heading}>
                                <h3 className={shopDetails.title}><FaCheckCircle className={shopDetails.check} />{DELIVERY_METHOD}</h3>
                            </div>
                            <div className={shopDetails.deliveryData}>
                                <div className={shopDetails.checkInput}>
                                    <input type='checkbox' />
                                    <span className={shopDetails.price}>200$</span>
                                    <p className={shopDetails.doorDelivery}>{DELIVERY_DOOR}</p>
                                </div>
                            </div>
                        </div>
                        <div className={shopDetails.paymentBlock}>
                            <div className={shopDetails.heading}>
                                <h3 className={shopDetails.title}><FaCheckCircle className={shopDetails.check} /> {PAYMENT_METHODS}</h3>
                            </div>
                            <div className={shopDetails.paymentCart}>
                                <div className={shopDetails.checkInput}>
                                    <input type='checkbox' />
                                    <span className={shopDetails.payCart}>{PAY_WITH_CART}</span>
                                </div>
                                <p className={shopDetails.shopDetailsText}>{GET_TO_OFF_TOTAL}</p>
                            </div>
                            <p className={shopDetails.paymentGateWayText}>{YOU_WILL_BE_REDIRECTED}</p>
                            <div className={shopDetails.paymentDelivery}>
                                <div className={shopDetails.checkInput}>
                                    <input type='checkbox' />
                                    <span className={shopDetails.payCart}>{PAY_ON_DELIVERY}</span>
                                </div>
                                <p className={shopDetails.deliveryText}>{KINDLY_NOTE_THAT}</p>
                                <p className={shopDetails.deliveryText}>{YOU_HAVE_TO_MAKE}</p>
                                <p className={shopDetails.deliveryText}>{ONCE_THE_SEAL_ID_BROKEN}</p>
                            </div>
                        </div>
                    </article>
                    <article className={shopDetails.shoppingForm}>

                        <AddressForm createAddressForUser={createAddressForUser} createCheckForBy={createCheckForBy} />
                    </article>
                </div>
            </div>
        </div>
    )
}

export default ShoppingDetails;
