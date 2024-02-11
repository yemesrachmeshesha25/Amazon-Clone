import React, { useContext } from "react";
import classes from "../Header/header.module.css";
import {Link} from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvide";
import {auth} from '../../Utility/firebase';

const Header = () => {
  const [{ user, basket},dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
},0)
  
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
        <div className={classes.logo_container}>
            <Link to ="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={25} />
          </div>
          {/* other section */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/auth"} className={classes.signin_button}>
              <div>  
              {user ? (
    <>
    <p>Hello {user?.email?.split("@")[0]}</p>
    <span onClick={()=>auth.signOut()}>Sign Out</span>
    </>
  ) : (
    <>
    <p>Hello, Sign in</p>
    <span>Account & List</span>
    </>
      )}
      </div>
            </Link>
            <Link to="/orders" className={classes.order_button}>
              <p>returns</p>
              <span>& orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
