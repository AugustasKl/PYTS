import React from 'react'
import Clients from '../components/Clients/Clients/Clients'
import Message from '../components/Message/Message'
import FirstOffer from '../components/ProgramOffers/FirstOffer/FirstOffer'
import SameOffer from '../components/ProgramOffers/SameOffer/SameOffer'
import Questions from '../components/Questions/Questions/Questions'
import Yoga from '../components/Yoga/Yoga/Yoga'

const CheckOutpage:React.FC = () => {
  return (
    <>
    <Message/>
    <FirstOffer/>
    <Clients/>
    <Yoga/>
    <Questions/>
    <SameOffer/>
    </>
  )
}

export default CheckOutpage