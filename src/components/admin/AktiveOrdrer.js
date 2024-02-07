import React, { useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa";
import {Textarea} from "@nextui-org/react";
import { MdDeliveryDining } from "react-icons/md";

const AktiveOrdrer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://order.eu-north-1.elasticbeanstalk.com/admin/getTodaysOrders', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa('admin:admin'), // assuming basic auth, adjust as needed
            'Content-Type': 'application/json',
            // Add any other headers if required
        },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setOrders(data);
        console.log(orders);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
    console.log(orders);

  }, []); 

  return (
    <div className='flex gap-x-5 mx-2'>
        {orders.map((orderData, index) => (
          <div className='bg-gray-100 p-4 rounded-md' key={index}>

            <div className='flex justify-between items-center border-b border-gray-100 pb-3'>
                <div className='flex items-center gap-x-2'>
                    Afhentning 
                    <MdDeliveryDining className='text-2xl' />
                </div>
                <p className='border-l border-gray-400 pl-2 ml-2'> {orderData.order.id} </p>
                <div className='flex items-center gap-x-2 border-l border-gray-400 px-3 mx-3'>
                    <p>{orderData.order.name}.</p> 
                    <FaPhone />
                </div>
                <p className='bg-red-400 text-white rounded-md p-1'>{orderData.order.preOrder ? 'Pre order' : 'ASAP'}</p>
            </div>

            <div className='my-3'>
              <Textarea
                label="Kommentar"
                labelPlacement="outside"
                className='w-full rounded-md text-sm'
                isReadOnly
                placeholder={orderData.order.comment}
              />
            </div>

            {orderData.order.items.map(item => (
              <div className='flex gap-x-2 bg-white my-3 p-2 rounded-md'>
                <p className='rounded-full p-1 px-[11px] bg-green-600 text-white w-fit h-fit mr-5 text-sm'>{item.quantity}</p>
                <div>
                  <p className='font-bold border-b mb-2 pb-1'>{item.description}</p>
                  <p className='text-sm'> <span className='font-bold'>Burger:</span>{item.description}</p>
                </div>
              </div>
            ))}

            <div>
              Pris: {orderData.order.fullPrice} kr.
            </div>

            <div className='mt-3 flex justify-between items-center gap-x-4'>
                <button
                className='bg-green-600 text-white py-2 rounded-md font-bold w-full'
                >
                    Vælg tid for afhentning
                </button>
                <button className='bg-gray-300 p-2 rounded-md font-bold'>...</button>
            </div>

          </div>
        ))}
    </div>


  );
};

export default AktiveOrdrer;
