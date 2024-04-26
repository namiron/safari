import React from 'react'
import CarouselItem from '../Slider/Carousel'
import tab from '../../modules/tabs.module.scss'
import CommentsList from '../review/CommentsList';



const TabTwo = ({ image = [], rating, comments = [], id }) => {


    return (
        <div className={tab.wrapper}>
            <div className={tab.swiper}>
                <CarouselItem image={image} />
            </div>
            <div className={tab.description}>
                <CommentsList rating={rating} comments={comments} id={id} />
            </div>
        </div>
    )
}

export default TabTwo;