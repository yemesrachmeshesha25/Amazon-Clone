import React from 'react'
import Layout from '../../Components/LayOut/Layout'
import Catagory from '../../Components/Catagory/Catagory'
import Carousel from '../../Components/Carousel/CarouselEffect'
// import Product from '../../Components/Products/Products'
function Landing() {
  return (
    <Layout>
        <Carousel/>
        <Catagory/>
        {/* <Product/> */}
    </Layout>
  )
}

export default Landing