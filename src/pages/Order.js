import Orders from 'components/orderComponents/Orders'
import React from 'react'
import Footer from 'components/footers/Footer';
import Herobanner from 'components/hero/Herobanner';
import ScrollSpy from "react-ui-scrollspy";
import Nav from 'components/headers/Navbar';


const Order = () => {
  return (
    <>

    <Herobanner />

    <Nav />




    <Orders />

    {/* <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <p id="paniniii" backgroundColor={"orange"}>
          <h1>panini</h1>
        </p>
        <p id="gourmetPizzaaa" backgroundColor={"brown"}>
          <h1>gourmetPizza</h1>
        </p>
        <p id="burgerrr" backgroundColor={"blue"}>
          <h1>burger</h1>
        </p>
        <p id="pizzaaa" backgroundColor={"green"}>
          <h1>pizza</h1>
        </p>
      </ScrollSpy> */}

    <Footer domain="Ordrupspizza" position="static" />

    </>
  )
}

export default Order