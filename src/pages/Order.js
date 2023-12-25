import Orders from 'components/orderComponents/Orders'
import React from 'react'
import Hero from 'components/orderComponents/Hero';
import Footer from 'components/footers/Footer';
const Order = () => {
  return (
    <>

    <Hero />
    <Orders />

    <Footer domain="Ordrupspizza" position="static" />

    </>
  )
}

export default Order