import Orders from 'components/orderComponents/Orders'
import React from 'react'
import Footer from 'components/footers/Footer';
import Herobanner from 'components/hero/Herobanner';
import ScrollSpy from "react-ui-scrollspy";
import Nav from 'components/headers/Navbar';


const Order = () => {
  return (
    <div>

      <div 
      className='lg:flex'
      >
        <div className='lg:w-[25%]'>
        <Nav />
        </div>

        <div className='lg:w-[75%]'>
        <Orders />
        </div>
      </div>

    <Footer domain="Ordrupspizza" position="static" />

    </div>
  )
}

export default Order