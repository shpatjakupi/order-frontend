import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
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
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
            <Link className='text-white' href="#">
                Features
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="#" className='text-white'>
                About
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link className='text-white' href="#">
                Contact
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
            <Button>
                <Link className='text-black font-bold' href="#">ORDER <FaPizzaSlice className='ml-3 text-xl' /></Link>
            </Button>
            </NavbarItem>
        </NavbarContent>
        </Navbar>
    </>
  )
}

export default Nav