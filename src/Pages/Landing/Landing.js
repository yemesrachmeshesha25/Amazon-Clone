import React from 'react'
import Layout from '../../Components/LayOut/Layout'
import Catagory from '../../Components/Catagory/Catagory'
import Carousel from '../../Components/Carousel/CarouselEffect'
function Landing() {
  return (
    <Layout>
        <Carousel/>
        <Catagory/>
    </Layout>
  )
}

export default Landing