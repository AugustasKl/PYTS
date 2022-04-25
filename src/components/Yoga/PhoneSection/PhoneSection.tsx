import classes from './PhoneSection.module.css'
import phoneImg from './../../../assets/images/phone.png'
// import background from './../../assets/svg/background.svg'
import React from 'react'

// PhoneSection component is responsible for rendering title and image of Yoga's
// component's section

const PhoneSection:React.FC=()=>{
    return(
        <React.Fragment>
            <div className={classes.phone}>
       <h3>Start your yoga journey now!</h3> 
       <img src={phoneImg} alt="Phone displaying positive yoga's page"/>
       </div>
       </React.Fragment>
       )
}
export default PhoneSection