import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Result/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OhSg4LafOJRtrcYgLIIj9vWyH8fAx9KKSQ1ZA82cwxMVyj23JMnTU3gloOb9annBKh5a3bApBfvBuzBLohlin3700V2LEQgQG'
);

  function Routing() {

return (
    <Router>
        <Routes>
            
        <Route path='/' element={<Landing />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/payments' 
                element={
                <Elements stripe={stripePromise}>
                <Payment /> 
                </Elements>
              } 
              />
                <Route path='/orders' element={<Orders />} />
                <Route path='/category/:categoryName' element={<Results />} />
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
  )
}

export default Routing