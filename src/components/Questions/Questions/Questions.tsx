import Button from '../../utils/Button'
import classes from './Questions.module.css'
import QuestionList from '../QuestionList/QuestionsList'
import React from 'react'

//Questions component is used by Checkout component.

const Questions:React.FC=()=>{
    return(
        <section className={classes.questions}>
            <h2>Frequently Asked Questions</h2>
            <QuestionList/>
            <Button>Get my plan</Button>
        </section>
    )
}

export default Questions