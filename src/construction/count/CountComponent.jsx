import React from 'react';
import tab from '../../modules/tabs.module.scss'
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

const CountComponent = ({ handleCountMinus, handleCountPlus, count }) => {


    return (
        <div className={tab.countBlock}>
            <span>{count}</span>
            <div className={tab.arrowBlock}>
                <button onClick={handleCountPlus} className={tab.arrowPlus}><MdArrowDropUp /></button>
                <button onClick={handleCountMinus} className={tab.arrowPlus}><MdArrowDropDown /></button>
            </div>
        </div>
    )
}

export default CountComponent


