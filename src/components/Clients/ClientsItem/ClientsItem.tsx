import React from 'react'
import classes from './ClientsItem.module.css'

//after receiving data from ClientsList, ClientsItem component destructures
// this data and uses it to render clients' stories.
interface ClientsItemProps {
    name:string,
    city:string,
    stars:string,
    comment:string,
    image:string
}

const ClientsItem:React.FC<ClientsItemProps>=({name, city, stars, comment,image})=>{

    return(
        <div className={classes.item}>
            <div className={classes.name}>
                {name}
            </div>
            <div className={classes.city}>
                {city}
            </div>
            <div className={classes.stars}>
            <img src={stars} alt='Stars logo'/>
            </div>
            <div className={classes.image}>
                <img src={image} alt='Person image'/>
            </div>
            <div className={classes.comment}>
                {comment}
            </div>
        </div>
    )
}
export default ClientsItem