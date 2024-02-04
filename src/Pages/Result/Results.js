import React, { useState, useEffect }from 'react'
import classes from './result.module.css'
import Layout from '../../Components/LayOut/Layout'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Products/ProductCard'
import Loader from '../../Components/Loader/Loader'

function Results() {
  const[results, setResults] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const {categoryName} =useParams()

 useEffect(() =>{
  setIsLoading(true);
 axios.get(`${productUrl}/products/category/${categoryName}`)
 .then((res)=>{
  setResults(res.data);
  setIsLoading(false);
})
  .catch ((err)=>{
    console.log(err)
    setIsLoading(false);
  });
  }, [categoryName]);
 
  return (
    <Layout>
     <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: 
      '30px'}}>Category / {categoryName}</p>
      <hr />
      {isloading ? (
        <Loader/>
      ): (
      <div className={classes.products_container}>
        {results?.map((product) => (
          <ProductCard
          key={product.id}
          product={product}
          renderDesc={false}
          renderAdd={true}
          />
        ))}
      </div>
      )}
     </section>
    </Layout>
    );
  };

export default Results