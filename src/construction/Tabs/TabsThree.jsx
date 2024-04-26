import React from 'react'
import tabs from '../../modules/tabs.module.scss'
import {
    AVAILABLE_IN_VARIOUS, BENEFITS_OF_PURCHASE,
    COLOR_AND_DESIGN, COMPATIBILITY, COMPATIBLE_WITH,
    COMPLIES_WITH_ALL, CONVENIENT_DIMENSIONS, DESCRIPTION,
    DIMENSIONS_AND_WEIGHT, FEATURES_A_WIDE, FUNCTIONALITY, GUARANTEES_HIGH_PERFORMANCE,
    HIGHT_QUANTITY, INSTRUCTION, MADE_OF_HIGH_QUALITY, MATERIALS, OUR_PRODUCTS_ARE_MANUFACTURED,
    OUR_SPECIALISTS, PERFORMANCE, PLEASE_CAREFULLY, PRODUCT, SAFARI_STORE, SAFETY, SPECIFICATION, STYLISH_DESIGN,
    SUPPORT_AND, THANKS_TO_A_WIDE, THE_ELEGANT_AND_MODERN, USER_MANUAL, VERSATILITY, WARRANTY,
    WE_GUARANTEE_THE_QUANTITY
} from '../../common/constants'


const TabsThree = ({ title }) => {
    return (
        <div className={tabs.wrapper} >
            <div className={tabs.container}>
                <div className={tabs.heading}>
                    <h1 className={tabs.title}>
                        {title}
                    </h1>
                </div>
                <div className={tabs.inner}>
                    <div className={tabs.descriptionBox}>
                        <h2 className={tabs.description}>
                            {DESCRIPTION}
                        </h2>
                        <p className={tabs.descriptionText}>Welcome to the product
                            description page at <span className={tabs.store}>{SAFARI_STORE}</span> Here you will find all the
                            necessary information about our product, which offers the perfect
                            combination of quality, functionality, and reliability.
                        </p>
                    </div>
                    <div className={tabs.specificationsBox}>
                        <div className={tabs.heading}>
                            <h2 className={tabs.specifications}>{SPECIFICATION}</h2>
                        </div>
                        <ul className={tabs.specificationsList}>
                            <li className={tabs.specificationsItem}><span className={tabs.specificationsSubTitle}>{DIMENSIONS_AND_WEIGHT}</span> {CONVENIENT_DIMENSIONS}</li>
                            <li className={tabs.specificationsItem}><span className={tabs.specificationsSubTitle}>{MATERIALS}</span>{MADE_OF_HIGH_QUALITY}</li>
                            <li className={tabs.specificationsItem}><span className={tabs.specificationsSubTitle}>{COLOR_AND_DESIGN}</span>{AVAILABLE_IN_VARIOUS}</li>
                            <li className={tabs.specificationsItem}><span className={tabs.specificationsSubTitle}>{FUNCTIONALITY}</span>{FEATURES_A_WIDE}</li>
                            <li className={tabs.specificationsItem}><span className={tabs.specificationsSubTitle}>{PERFORMANCE}</span>{GUARANTEES_HIGH_PERFORMANCE}</li>
                            <li className={tabs.specificationsItem}><span className={tabs.specificationsSubTitle}>{COMPATIBILITY}</span>{COMPATIBLE_WITH}</li>
                            <li className={tabs.specificationsItem}><span className={tabs.specificationsSubTitle}>{SAFETY}</span>{COMPLIES_WITH_ALL}</li>
                        </ul>
                    </div>

                    <div className={tabs.purchaseBox}>
                        <div className={tabs.heading}>
                            <h2 className={tabs.purchase}>{BENEFITS_OF_PURCHASE}</h2>
                        </div>
                        <ul className={tabs.purchaseList}>
                            <li className={tabs.purchaseItem}><span className={tabs.purchaseSubTitle}>{HIGHT_QUANTITY} </span>{OUR_PRODUCTS_ARE_MANUFACTURED}</li>
                            <li className={tabs.purchaseItem}><span className={tabs.purchaseSubTitle}>{VERSATILITY}</span>{THANKS_TO_A_WIDE}</li>
                            <li className={tabs.purchaseItem}><span className={tabs.purchaseSubTitle}>{STYLISH_DESIGN}</span>{THE_ELEGANT_AND_MODERN}</li>
                        </ul>
                    </div>
                    <div className={tabs.packageContentsBox}>
                        <ul className={tabs.contentsList}>
                            <li className={tabs.contentsItem}>{PRODUCT}</li>
                            <li className={tabs.contentsItem}>{USER_MANUAL}</li>
                        </ul>
                    </div>
                    <div className={tabs.instructionBox}>
                        <h2 className={tabs.instructionTitle}>{INSTRUCTION}</h2>
                        <p className={tabs.inctuctionText}>{PLEASE_CAREFULLY}</p>
                    </div>
                    <div className={tabs.warrantyBox}>
                        <h2 className={tabs.warrantyTitle}>{WARRANTY}</h2>
                        <p className={tabs.warrantyText}>{WE_GUARANTEE_THE_QUANTITY}</p>
                    </div>
                    <div className={tabs.instructionBox}>
                        <h2 className={tabs.instructionTitle}>{SUPPORT_AND}</h2>
                        <p className={tabs.inctuctionText}>{OUR_SPECIALISTS}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsThree