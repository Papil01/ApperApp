import React from 'react'
import s from "./Home.module.css"

const Navbar = () => {
  return (
    <div>
        <div className={s.navbar} >
         <div className={s.logo}  ><img src='./logo.png' /></div>
         <div className={s.go}  >Home</div>
         <div className={s.go}  >Features</div>
         <div className={s.go} >How it works</div>
         <div className={s.go}  >Pages</div>
         <div className={s.go}   >Pricing</div>
         <div className={s.go}  >Blog</div>
         <div className={s.go} >Contact</div>
         <button className={s.getStarted} >GET STARTED</button>
        </div>
        
    </div>
  )
}

export default Navbar