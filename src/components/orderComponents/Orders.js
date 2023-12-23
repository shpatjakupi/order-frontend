import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import menuData from '../../dummydata.json';
import { Link } from 'react-router-dom';
import { FaCircleInfo } from "react-icons/fa6";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip} from "@nextui-org/react";
import { FiClock } from "react-icons/fi";

const Orders = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    // State to store the fetched data
    const [data, setData] = useState(null);
    // State to track loading status
    const [loading, setLoading] = useState(true);
    // State to track errors
    const [error, setError] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const uniqueCategories = [...new Set(data.map(item => item.foodkey))];

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

    console.log(data);


//       // Render content based on loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

  return (
    <div className='mt-10'>
        <div className='px-4'>

            <p className=''>Du kan bestille din mad her i løbet af få kliks.</p>

            <div className='flex w-full justify-start gap-4'>
                
                <div className='flex items-center text-xs'>
                    <FiClock className='mr-1' />
                    <p>Åbent indtil 22.00</p>
                </div>

                <div className='flex items-center text-xs'>
                    <FcGoogle className='mr-1' />
                    <p>4.5</p>
                </div>

                <div>
                    <Button startContent={<FaCircleInfo className='text-md text-blue-400 mr-[-4px]' />} className='bg-transparent w-fit p-0 m-0 text-xs' onPress={onOpen}>Se mere information</Button>
                    <Modal className='z-[1000px]' isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                        {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h2 className='text-xl font-bold'>BEHOV Pizza Rentemestervej</h2>
                                <div className='flex items-center'>
                                    <div className='bg-red-500 dark:bg-[#65e295] w-[12px] h-[12px] rounded-full mr-1 shrinkAndGrow animate-pulse text-sm'></div>
                                    <p className='text-sm text-[#717173] font-light'>Søndag 11.00–21.00</p>
                                </div>
                            </ModalHeader>
                            <hr />
                            <ModalBody>
                                <p> 
                                Behov serverer autentiske italiensk pizzaer. Om du er til farverige kombinationer hver gang, eller du for længst har fundet din egen klassiker, kan du få din pizza lige som du vil have den.
                                </p>

                                <p className='font-bold text-lg'>Adresse:</p>
                                <p className='text-[#717173]'>Rentemestervej 94 <br />
                                2400 København</p>

                                <p className='font-bold text-lg'>Åbningstider:</p>
                                <div className='text-sm'>

                                    <div className='flex justify-between w-full'>
                                        <p>Mandag</p>
                                        <p className='text-[#717173]'>11.00 - 21.00</p>
                                    </div>

                                    <div className='flex justify-between w-full'>
                                        <p>Tirsdag</p>
                                        <p className='text-[#717173]'>11.00 - 21.00</p>
                                    </div>

                                    <div className='flex justify-between w-full'>
                                        <p>Onsdag</p>
                                        <p className='text-[#717173]'>11.00 - 21.00</p>
                                    </div>

                                    <div className='flex justify-between w-full'>
                                        <p>Torsdag</p>
                                        <p className='text-[#717173]'>11.00 - 21.00</p>
                                    </div>

                                    <div className='flex justify-between w-full'>
                                        <p>Fredag</p>
                                        <p className='text-[#717173]'>11.00 - 23.00</p>
                                    </div>

                                    <div className='flex justify-between w-full'>
                                        <p>Lørdag</p>
                                        <p className='text-[#717173]'>11.00 - 23.00</p>
                                    </div>

                                    <div className='flex justify-between w-full'>
                                        <p>Søndag</p>
                                        <p className='text-[#717173]'>11.00 - 21.00</p>
                                    </div>

                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='bg-gray-100 text-black' onPress={onClose}>
                                Cancel
                                </Button>
                            </ModalFooter>
                            </>
                        )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>

            <Input
            size='xs'
            startContent={
            <FaSearch className="text-default-400 pointer-events-none flex-shrink-0 text-sm" />
            }
            color={'danger'}
            className='text-black mt-5' 
            type="text" 
            placeholder="Søg efter noget spændende" 
            />

            <div className='mt-4'>
                <p className='text-sm'>V - Vegetarisk</p>
                <p className='text-sm'>G - Glutenfri</p>

                <div className='mt-10'>
                    {uniqueCategories.map(category => (
                    <div key={category}>
                    <h2 className='text-4xl font-bold my-5'>{category}</h2>
                    <ul>
                        {data
                        .filter(item => (selectedCategory ? item.category === selectedCategory : true))
                        .map(item => (
                            <div key={item.id} className='flex gap-6 justify-between mt-7 border-b py-4 px-1 hover:bg-gray-100 hover:rounded-md cursor-pointer'>
                                <div> 
                                    <p className='font-semibold mb-1'>{item.name}</p>
                                    <p className='text-sm text-[#717173]'>{item.description}</p>
                                    <p className='mt-5 text-sm text-blue-400'>{`${item.price} kr.`}</p>
                                </div>
                                <div> 
                                <div className='relative w-[100px] h-[90px]'>
                                    <img className='w-[130px] h-[90px] rounded-lg' src={item.image} />
                                    <p className='absolute top-0 right-0 px-2 bg-white text-black rounded-bl-xl text-lg'>+</p>
                                </div>

                                </div>
                            </div>
                        ))}
                    </ul>
                    </div>
                    ))}
                </div>

            </div>

        </div>

        <div className='bg-blue-400 flex fixed bottom-2 left-4 right-4 justify-between m-auto p-3 px-4 rounded-md text-white'>
            <div className='flex items-center'>
                <span className='mr-3 bg-white text-blue-400 text-sm rounded-full px-[7px]'>1</span>
                <p className='font-semibold'>Vis ordre</p>
            </div>

            <p>0,00 kr.</p>
        </div>

    </div>
  )
}

export default Orders