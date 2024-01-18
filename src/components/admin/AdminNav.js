import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

const Adminnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Aktive ordrer", path: "/Admin/aktive-ordrer" },
    { label: "Tidligere ordrer", path: "/Admin/tidligere-ordrer" },
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

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full text-black"
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Adminnav;
