import Orders from 'components/orderComponents/Orders'
import React from 'react'
import Footer from 'components/footers/Footer';
import Herobanner from 'components/hero/Herobanner';
import Nav from 'components/headers/Navbar';

const Order = () => {
  return (
    <div>
       <Herobanner />
      <div 
      className='lg:flex lg:mx-14 lg:gap-10'
      >
        <div className='lg:w-[25%] sticky top-14 z-50'>
        <Nav />
        </div>

        <div className='mx-6 lg:mx-0 lg:w-[75%]'>
        <Orders />
        </div>
      </div>

    <Footer domain="Ordrupspizza" position="static" />

    </div>
  )
}

export default Order