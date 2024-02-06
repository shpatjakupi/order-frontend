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
  }, []); 

  return (
    <div className='flex gap-x-5 mx-2'>
        {orders.map((orderData, index) => (
        <>
          <div className='bg-blue-500 p-2' key={index}>
            <h2>Name: {orderData.order.name}</h2>
            <p>Details: {orderData.order.details}</p>
            <p>Price: {orderData.order.fullPrice}</p>
            <p>Pickup Date: {orderData.order.pickUpDate}</p>
            <p>Comment: {orderData.order.comment}</p>
            
            <h3 className='mt-3'>Items:</h3>
            <ul>
              {orderData.order.items.map(item => (
                <li key={item.description}>
                  <p>Description: {item.description}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  {/* Add more details as needed */}
                </li>
              ))}
            </ul>
          </div>
        </>
        ))}
    </div>
  );
};

export default AktiveOrdrer;
