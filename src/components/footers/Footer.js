import React from 'react'
import {Divider} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {AiOutlinePlus} from "react-icons/ai";

export default function Footer(props) {
  return (
    <div className='border-t footer text-center text-sm py-3'>  

        <p>Copyright © 2023 {props.domain}.dk. All rights reserved.</p>

        {/* <div className=''>
        <ul className='flex justify-center'>
            <li className='mr-5'>Order</li>
            <li className='mr-5'>Call</li>
            <li>Cookie Preferences</li>
        </ul>
        </div> */}
        
    </div>  

  )
}
