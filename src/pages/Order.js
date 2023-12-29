import Orders from 'components/orderComponents/Orders'
import React from 'react'
import Footer from 'components/footers/Footer';
import Herobanner from 'components/hero/Herobanner';
const Order = () => {
  return (
    <>

    <Herobanner />
    <Orders />

    <Footer domain="Ordrupspizza" position="static" />

    </>
  )
}

export default Order