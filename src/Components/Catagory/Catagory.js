import React from 'react'
import { catagoryInfos } from './catagoryfullnfos'
import CatagoryCard from './CatagoryCard'
import classes from '../Catagory/catagory.module.css'
function Catagory() {
  return (
    <section className={classes.catagory_container}>
        {
            catagoryInfos.map((infos)=><CatagoryCard data = {infos}/>)
        }
    </section>
  )
}

export default Catagory