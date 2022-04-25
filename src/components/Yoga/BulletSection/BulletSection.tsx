import React from 'react'
import { DUMMY_BULLETS } from '../../../DUMMY_DATA/dummyBullets'
import BulletItem from '../BulletItem/BulletItem'
import classes from './BulletSection.module.css'

// BulletSection is responsible for mapping DUMMY_BULLETS data and passing it
// as props to BulletItem component.

const BulletSection:React.FC =()=>{
    return(
        <React.Fragment>
        <div className={classes.list}>
        <h3>Is Positive Yoga right for me?</h3>
        <ul>
            {DUMMY_BULLETS.map((bullet)=>{
                return<BulletItem
                key={bullet.id}
                bullet={bullet.bulletpoint}
                />
            })}   
        </ul>
        </div>
        </React.Fragment>
    )
}

export default BulletSection