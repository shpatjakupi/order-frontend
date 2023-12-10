import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Tooltip} from "@nextui-org/react";
import { FaPizzaSlice } from "react-icons/fa";


const Nav = () => {
  return (
    <>
        <Navbar 
        shouldHideOnScroll
        className='fixed bg-transparent text-white'
        >
        <NavbarBrand>
            <p className="font-bold text-inherit text-white">LOGO</p>
        </NavbarBrand>
        <NavbarContent justify="end">
            <NavbarItem className="lg:flex">
            <Tooltip content="Order now!">
            <Button>
                <Link className='text-black font-bold' href="#">ORDER <FaPizzaSlice className='ml-3 text-xl' /></Link>
            </Button>
            </Tooltip>
            </NavbarItem>
        </NavbarContent>
        </Navbar>
    </>
  )
}

export default Nav