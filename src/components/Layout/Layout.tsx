import React, { ReactChild } from 'react'
import Header from './Header/Header'
import Promo from './Promo/Promo'

interface LayoutProps{
    children: ReactChild 
}
const Layout:React.FC<LayoutProps> = ({children}) => {

  return (
      <>
      <Promo/>
      <Header/>
      <main>{children}</main>
      </>
   
  )
}

export default Layout