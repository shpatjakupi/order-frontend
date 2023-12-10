import React from 'react'
import {Divider} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {AiOutlinePlus} from "react-icons/ai";

export default function Footer() {
  return (
    <div className='border-t px-5 py-5 footer text-center lg:flex justify-center lg:justify-between text-sm'>  

        <div className='mb-2 lg:mb-0'>
        <p>Copyright © 2023 VanløsePizza.dk. All rights reserved.</p>
        </div>

        <div className=''>
        <ul className='flex justify-center'>
            <li className='mr-5'>Order</li>
            <li className='mr-5'>Call</li>
            <li>Cookie Preferences</li>
        </ul>
        </div>
        
    </div>  

  )
}
