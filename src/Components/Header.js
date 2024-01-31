 import React from 'react'
 import classes from './Header/header.module.css'
 import { SlLocationPin } from "react-icons/sl";
 import { BsSearch } from "react-icons/bs";
 import { BiCart } from "react-icons/bi";
 import LowerHeader from './Header/LowerHeader';
const Header = () => {
return (
        <>
        <section>
                <div className={classes.header_container}>
                    {/* logo */}
                    <div className=
                    {classes.logo_container}>
                    <a href="#">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="amazon logo" />
                    </a>
                    <div className={classes.delivery}>
                    <span>
                    <SlLocationPin/>
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
                <input type="text" placeholder='Search Amazon'/>
                <BsSearch size={25} />
                </div>
                {/* other section */}
                <div className={classes.order_container}>
                    <a href="" className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Ethiopia_%28Blank%29.svg/1280px-Flag_of_Ethiopia_%28Blank%29.svg.png" alt="" />
                    <select name="" id="">
                    <option value="">EN</option>
                    </select>
                    </a>
                    <a href="" >
                            <p>Sign In</p>
                        <span>Account & List</span>
                    </a>
                    <a href="" >
                        <p>returns</p>
                        <span>& orders</span>
                    </a>
                
                <a href= "" className={classes.cart}>
                    <BiCart size={35} />
                        <span>0</span>
                    </a>
                </div>
            </div>
            </section>
            <LowerHeader/>
        </>
        );
    };
    
    export default Header