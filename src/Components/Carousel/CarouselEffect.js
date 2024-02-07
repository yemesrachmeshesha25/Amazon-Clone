import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from '../Carousel/carousel.css';

function CarouselEffect() {
  return (
    <div>
<Carousel
    autoPlay={true}
    infinitLoop={true}
    showIndicators={false}
    showThumbs={false}
>
{
    img.map((imageItemsLink)=>{
        return <img key={imageItemLink} src={imageItemsLink}/>
    })
}
</Carousel>
<div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect