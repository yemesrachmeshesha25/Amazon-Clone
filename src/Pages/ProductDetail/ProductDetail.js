import React, { useEffect, useState } from 'react'
import classes from "../ProductDetail/ProductDetails.module.css"
import Layout from '../../Components/LayOut/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl} from '../../Api/endPoints'
import ProductCard from '../../Components/Products/ProductCard'
import Loader from '../../Components/Loader/Loader'

function ProductDetail() {
  const [product, setproduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const {productId} = useParams()
  useEffect (() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [productId])
  return (
    <Layout>
      {isLoading? (<Loader/>):(<ProductCard
product={product}
flex={true}
renderDesc={true}
renderAdd={true}
/>)}

    </Layout>
)
}
export default ProductDetail