import React from 'react'
import {Divider} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {AiOutlinePlus} from "react-icons/ai";

export default function Footer(props) {
  return (
    <div className='border-t lg:flex justify-between items-center absolute bottom-0 footer text-center text-xs md:text-sm py-3 w-full px-5'>  

        <p className='text-center mb-2 lg:mb-0'>Copyright © 2023 {props.domain}.dk</p>

        <div className=''>
        <ul className='flex justify-center'>
            <li className='mr-5'>Bestil</li>
            <li className='mr-5'>Ring</li>
            <li>Cookie præferencer</li>
        </ul>
        </div> 
        
    </div>  

  )
}
