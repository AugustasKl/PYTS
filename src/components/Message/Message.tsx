import React from 'react'
import classes from './Message.module.css'
const Message:React.FC = () => {
  return (
    <React.Fragment>
    <section className={classes.message}>
    <span>Over <b>52 147</b> plans ordered.</span>
    </section>
    </React.Fragment>
  )
}

export default Message