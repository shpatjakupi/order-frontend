import React from 'react'
import { FaPhone } from "react-icons/fa";
import {Textarea} from "@nextui-org/react";
import { MdDeliveryDining } from "react-icons/md";

const AktiveOrdrer = () => {
  return (
    <div className='mt-5'>

        <div className='flex gap-x-5 mx-2'>
            
            <div className='bg-gray-100 p-4 rounded-md'>
    
                <div className='flex justify-between items-center border-b border-gray-100 pb-3'>
                    <div className='flex items-center gap-x-2'>
                        Levering 
                        <MdDeliveryDining className='text-2xl' />
                    </div>
                    <p className='border-l border-gray-400 pl-2 ml-2'>#313</p>
                    <div className='flex items-center gap-x-2 border-r border-l border-gray-400 px-3 mx-3'>
                        <p>Josefine K.</p> 
                        <FaPhone />
                    </div>
                    <p className='bg-red-400 text-white rounded-md p-1'>20 min.</p>
                </div>

                <div className='my-3'>
                <Textarea
                    label="Kommentar"
                    labelPlacement="outside"
                    className='w-full rounded-md text-sm'
                    isReadOnly
                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                />
                </div>

                <div className='flex gap-x-2 bg-white my-3 p-2 rounded-md'>
                    <p className='rounded-full p-1 px-[11px] bg-green-500 text-white w-fit h-fit mr-5 text-sm'>1</p>
                    <div>
                    <p className='font-bold border-b mb-2 pb-1'>Burger menu</p>
                    <p className='text-sm'> <span className='font-bold'>Burger:</span> cheese okse</p>
                    <p className='text-sm'> <span className='font-bold'>Dip:</span> Salatmayonaise</p>
                    <p className='text-sm'> <span className='font-bold'>Sodavand:</span> Cola</p>

                    </div>
                </div>

                <div className='flex gap-x-2 bg-white my-3 p-2 rounded-md'>
                    <p className='rounded-full p-1 px-[11px] bg-green-500 text-white w-fit h-fit mr-5 text-sm'>1</p>
                    <div>
                    <p className='font-bold border-b mb-2 pb-1'>Pizza Blanca</p>
                    <p className='text-sm'> <span className='font-bold'>Topping:</span> Parmesan</p>

                    </div>
                </div>
            </div>
            
            <div className='bg-gray-100 p-4 rounded-md'>
    
                <div className='flex justify-between items-center border-b border-gray-100 pb-3'>
                    <div className='flex items-center gap-x-2'>
                        Levering 
                        <MdDeliveryDining className='text-2xl' />
                    </div>
                    <p className='border-l border-gray-400 pl-2 ml-2'>#313</p>
                    <div className='flex items-center gap-x-2 border-r border-l border-gray-400 px-3 mx-3'>
                        <p>Josefine K.</p> 
                        <FaPhone />
                    </div>
                    <p className='bg-red-400 text-white rounded-md p-1'>20 min.</p>
                </div>

                <div className='my-3'>
                <Textarea
                    label="Kommentar"
                    labelPlacement="outside"
                    className='w-full rounded-md text-sm'
                    isReadOnly
                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                />
                </div>

                <div className='flex gap-x-2 bg-white my-3 p-2 rounded-md'>
                    <p className='rounded-full p-1 px-[11px] bg-green-500 text-white w-fit h-fit mr-5 text-sm'>1</p>
                    <div>
                    <p className='font-bold border-b mb-2 pb-1'>Burger menu</p>
                    <p className='text-sm'> <span className='font-bold'>Burger:</span> cheese okse</p>
                    <p className='text-sm'> <span className='font-bold'>Dip:</span> Salatmayonaise</p>
                    <p className='text-sm'> <span className='font-bold'>Sodavand:</span> Cola</p>

                    </div>
                </div>

                <div className='flex gap-x-2 bg-white my-3 p-2 rounded-md'>
                    <p className='rounded-full p-1 px-[11px] bg-green-500 text-white w-fit h-fit mr-5 text-sm'>1</p>
                    <div>
                    <p className='font-bold border-b mb-2 pb-1'>Pizza Blanca</p>
                    <p className='text-sm'> <span className='font-bold'>Topping:</span> Parmesan</p>

                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AktiveOrdrer