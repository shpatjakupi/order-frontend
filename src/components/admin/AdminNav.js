import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, NavbarItem } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

const Adminnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Aktive ordrer", path: "/Admin/aktive-ordrer" },
    { label: "Tidligere ordrer", path: "/Admin/tidligere-ordrer"},
    { label: "Menu-redigering", path: "/Admin/menu-redigering" },
    { label: "Support", path: "/Admin/support" },
  ];

  return (
    <Navbar className='w-full justify-start border-b' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand>
          <p className="font-bold text-inherit">Ordrups Pizza</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu className=' mt-14'>
        <NavbarMenuItem>
          <Link
          className='w-full text-black'
          href='/Admin/aktive-ordrer'
          size='md'
          >
            Aktive ordrer
          </Link>
        </NavbarMenuItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent justify-normal text-md"
                radius="sm"
                variant="light"
                endContent={<IoIosArrowDown className='text-black' />}
              >
                Tidligere ordrer
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
            >
              <Link
              href='/Admin/idag'
              className='text-black text-md'
              >
                I dag
              </Link>
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
            >
              I går
            </DropdownItem>
            <DropdownItem
              key="production_ready"
            >
              Denne uge
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
            >
              Sidste uge
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
            >
              Denne måned
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
            >
              Sidste måned
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full text-black"
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))} */}
      </NavbarMenu>
    </Navbar>
  );
};

export default Adminnav;
