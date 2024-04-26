import React from 'react'
import '../../styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import carousel from '../../modules/carousel.module.scss';


const CarouselItem = ({ image = [] }) => {
    return (
        <div>
            <Carousel infiniteLoop  >
                {
                    image.map((img, i) => {
                        return <div key={i} className={carousel.imageBox}>
                            <img src={img} alt="product" />
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}

export default CarouselItem;
