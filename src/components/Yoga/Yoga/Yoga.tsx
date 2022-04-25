import React from "react"
import BulletSection from "../BulletSection/BulletSection"
import PhoneSection from "../PhoneSection/PhoneSection"
import classes from './Yoga.module.css'

const Yoga:React.FC=()=>{

    return(
        <React.Fragment>
            <section className={classes.yoga}>
                <PhoneSection/>
                <BulletSection/>
            </section>
        </React.Fragment>
    )
}
export default Yoga