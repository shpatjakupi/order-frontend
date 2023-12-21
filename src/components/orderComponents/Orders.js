import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Orders = () => {

// State to store the fetched data
  const [data, setData] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to track errors
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            
            try {

                // Set loading to true while fetching data
                setLoading(true);
                
                const headers = new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('john:test123'),
                  });
                  
                  const requestOptions = {
                    method: 'GET',
                    headers: headers,
                  };
                  
                  const response = await fetch('http://order.eu-north-1.elasticbeanstalk.com/menu/food', requestOptions);                  
              
              // Check if the response is successful (status code 200-299)
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
      
              // Parse the response data as JSON
              const result = await response.json();
      
              // Set the fetched data in the state
              setData(result);
              console.log(data);
            } catch (error) {
              // Set error state if there is an error
              setError(error);
            } finally {
              // Set loading to false when the request is complete
              setLoading(false);
            }

        };

        fetchData();

    }, []);

      // Render content based on loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='mt-10 px-4'>

        <p className='mb-2'>Du kan bestille din mad her i løbet af få kliks.</p>

        <div className='flex w-full justify-start gap-4'>
            
            <div className='flex items-center text-sm'>
                <FaSearch className='mr-2' />
                <p>Åbent indtil 22.00</p>
            </div>

            <div className='flex items-center text-sm'>
                <FcGoogle className='mr-2' />
                <p>4.5</p>
            </div>
        </div>

        <Input
        size='xs'
        startContent={
        <FaSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        color={'danger'}
        className='text-black mt-5' 
        type="text" 
        placeholder="Søg efter noget spændende" 
        />

        <div className='mt-4'>
            <p className='text-sm'>V - Vegetarisk</p>
            <p className='text-sm'>G - Glutenfri</p>

            <div>

            </div>

        </div>

    </div>
  )
}

export default Orders