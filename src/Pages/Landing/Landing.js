import React from 'react'
import Layout from '../../Components/LayOut/Layout'
import Catagory from '../../Components/Catagory/Catagory'
import Carousel from '../../Components/Carousel/CarouselEffect'
import Product from '../../Components/Products/Products'
import Footer from '../../Components/Footer/Footer'

function Landing() {
  return (
    <Layout>
        <Carousel/>
        <Catagory/>
        <Product/>
        <Footer/>
    </Layout>
  )
}

export default Landing