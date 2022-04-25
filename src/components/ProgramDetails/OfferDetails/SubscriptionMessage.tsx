import classes from './SubscriptionMessage.module.css'
import payments from '../../../assets/svg/payments.svg'


//SubscriptionMessage component is responsible for rendering two strings and an image 
const SubscriptionMessage:React.FC =()=>{

    return(
        <div className={classes.paragraph}>
            <div className={classes.text}>
            <p>Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. To cancel your subscription, please contact us at least 24 hours before the end of the trial period.</p>
            <p>By choosing a payment method you agree to the <a href='!#'> T&Cs </a>and <a href='!#'>Privacy Policy</a></p>
            </div>
            <div className={classes.image}>
                <img src={payments} alt='payments info'/>
            </div>
        </div>
    )
}

export default SubscriptionMessage

