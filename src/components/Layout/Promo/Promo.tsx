import React from 'react'
import tag from '../../../assets/svg/tag.svg'
import classes from './Promo.module.css'

const Promo:React.FC = () => {

    return(
        <div className={classes.promo}>
            <img src={tag} className={classes.tag} alt='price tag logo'/>
            <h6>50% discount only valid for 00:15:49</h6>
        </div>
    )
  
}

export default Promo