import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Tooltip } from "@nextui-org/react";
import { FaPizzaSlice } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='w-full text-end z-50 fixed text-white px-3 py-3'>

      <Button size='sm' className='bg-blue-400 text-white font-bold text-md'>Bestil</Button>
    </div>
  );
}

export default Nav;
