import { CLIENTS_DUMMY_DATA } from "../../../DUMMY_DATA/dummyClients"
import ClientsItem from "../ClientsItem/ClientsItem"
import classes from './ClientsList.module.css'
import React from 'react'
//ClientList component receives CLIENTS_DUMMY_DATA data and maps over it. This mapped
//data is passed as props to ClientsItem component

const ClientsList:React.FC=()=>{
    return(
        <ul className={classes.list}>
            {CLIENTS_DUMMY_DATA.map((client)=>{
                return <ClientsItem
                key={client.id}
                name={client.name}
                city={client.city}
                image={client.image}
                stars={client.stars}
                comment={client.comment}
                />
            })}
        </ul>
    )
}

export default ClientsList