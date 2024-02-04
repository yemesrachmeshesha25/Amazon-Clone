import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvide';
import ProductCard from '../../Components/Products/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import {Link} from 'react-router-dom'

function Cart() {
  const [{basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
      return item.price + amount;
  }, 0);
  
  return (
      <LayOut> 
          <section>
              <div>
                  <h2>Hello</h2>
                  <h3>Your Shopping Basket</h3>
                  <hr />
                  {
                      basket?.length==0?(<p>Opps ! No item in your cart</p>):(basket?.map((item,i)=>{
                          return <ProductCard
                          key={i}
                          product={item}
                          renderDesc={true}
                          renderAdd={false}
                          flex={true}
                          />
                      }))
                  }
              </div>
              <div>
                  {
                      basket?.length !==0 &&(
                          <div>
                              <div>
                                  <p>Subtotal ({basket?.length} items)</p>
                                  <CurrencyFormat amount={total}/>
                              </div>
                              <span><input type="checkbox" />
                              <small>This order contains a gift</small>
                              </span>
                              <Link to="/payments">Continue to checkout</Link>
                          </div>
                      )
                  }
              </div>
          </section>
      </LayOut>
  )
}

export default Cart