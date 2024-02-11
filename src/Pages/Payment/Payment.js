import React, { useContext, useState} from 'react'
import classes from './payment.module.css'
import Layout from '../../Components/LayOut/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvide';
import ProductCard from '../../Components/Products/ProductCard'
import {useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';

function Payment() {

  const [{user, basket}] = useContext(DataContext);
 console.log(user)
  
 const totalItem =basket?.reduce((amount,item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount,item) => {
    return item.price * item.amount+ amount;
}, 0);

  const [cardError, setCardError] = useState()
  const stripe = useStripe();
  const elements = useElements();

const handleChange = (e) => {
  console.log(e);
  e.error.message? setCardError(e?.error?.message): setCardError("")
};
  return (
    <Layout>
      {/* header */}

      <div className={classes.payment_header}>Checkout({totalItem})items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
        <h3>Delivery Address</h3>
        <div>
          <div>{user?.email}</div>
          <div>123 React Lane</div>
          <div>Chicago, IL</div>
        </div>
        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
        <h3>Review items and delivery</h3>
        <div>
          {
            basket?.map((item)=><ProductCard product={item} flex={true}/>)
          }
        </div>
        </div>
        <hr />
        
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.payment_card_container}>
          <div className={classes.payment_details}>
            <form action="">
              {/* error */}
              {CardElement && (
              <small style={{color: "red"}}>{cardError}</small>)}
              {/* card element */}
            <CardElement onChange={handleChange}/>

            {/* price */}
            <div className={classes.payment_price}>
              <div>
                <span style={{display:"flex", gap: "10px"}}>
                  <p>Total Order | </p><CurrencyFormat amount={total}/>
                </span>
              </div>
              <button>Pay Now</button>
            </div>
            </form>
          </div>
          </div>
        </div>
      </section>
    </Layout>
    
  );
}

export default Payment