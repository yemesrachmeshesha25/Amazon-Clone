import React from 'react'
import classes from './Signup.module.css'

function Auth() {
  return (
    
<section className={classes.login}>
{/* logo */}
<link>
<img src="https://commons.wikimedia.org/wiki/File:Amazon_logo._CB635397845.png"alt=""/>
</link>
{/* form */}
<div className={classes.login_container}>
  <h1>Sign In</h1>
  <form action="">

    <div>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
    </div>
    <div>

    <label htmlFor="password">Password</label>
      <input type="password" id="password" />
    </div>
    <button>Sign In</button>
  </form>
</div>
</section>

    
  )
}

export default Auth