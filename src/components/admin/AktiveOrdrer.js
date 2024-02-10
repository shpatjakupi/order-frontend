import React, { useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa";
import {Textarea} from "@nextui-org/react";
import { MdDeliveryDining } from "react-icons/md";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";

const AktiveOrdrer = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [sliderValue, setSliderValue] = useState(15);
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

  const setTimerForPickUp = async (order) => {
    console.log(order.id);
    console.log(sliderValue);

    const requestOptions = {
      "method": 'PUT',
      "headers": {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('admin:admin'),
      },
      "mode": 'cors', // Ensure you set the mode to 'cors'
      // "body": JSON.stringify(data),
    };

    try {
      const response = await fetch(`http://order.eu-north-1.elasticbeanstalk.com/admin/updateOrderCompletionTime/${order.id}/${sliderValue}`, requestOptions);    

      if (!response.ok) {
        // Handle non-successful response (e.g., server error)
        console.error('Failed to make the request. Status:', response.status);
        return;
      }

      // If needed, you can parse and use the response data
      const responseData =  response;
      console.log('Response data:', responseData);

    } catch (error) {
      console.error('Error during the fetch operation:', error);
    }


  }

  return (
    <div className='flex flex-wrap gap-x-5 mx-3 my-3'>
        {orders.map((orderData, index) => (
          <div className='bg-gray-100 p-4 my-2 rounded-md' key={index}>

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
                <p className='bg-red-400 text-white font-bold rounded-md p-1 px-2'>{orderData.order.preOrder ? 'Pre order' : 'ASAP'}</p>
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

            {orderData.order.items.map((item, index) => (
              <div key={index} className='flex gap-x-2 bg-white my-3 p-2 rounded-md'>
                <p className='rounded-full p-1 px-[11px] bg-green-600 text-white w-fit h-fit mr-5 text-sm'>{item.quantity}</p>
                <div>
                  <p className='font-bold border-b mb-2 pb-1'>{item.description}</p>
                  <p className='text-sm'> <span className='font-bold'>Beskrivelse: </span>{item.description}</p>
                </div>
              </div>
            ))}

            <div>
              Pris: {orderData.order.fullPrice} kr.
            </div>

            <div className='mt-3 flex justify-between items-center gap-x-4'>
                <Button
                onPress={onOpen}
                className='bg-green-600 text-white py-2 rounded-md font-bold w-full'
                >
                    Tilberedningstid
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                        Tilberedningstid
                        </ModalHeader>
                        <ModalBody>
                          <p> 
                            Vælg hvor mange minutter du skal bruge på at forberede bestillingen
                          </p>
                          <Slider   
                            size="md"
                            step={5}
                            onChange={setSliderValue}
                            color="foreground"
                            label="Tilberedningstid i min."
                            showSteps={true} 
                            maxValue={30} 
                            minValue={5} 
                            defaultValue={15}
                            className="max-w-md" 
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Annuller
                          </Button>
                          <Button 
                          className='bg-green-600 text-white' 
                          onPress={() => { onClose(); setTimerForPickUp(orderData.order); }}
                          // onPress={
                          //   () => { onClose && setTimerForPickUp(orderData.order) }
                          // }
                          >
                            Fortsæt
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                <button className='bg-gray-300 p-2 rounded-md font-bold'>...</button>
            </div>

          </div>
        ))}
    </div>


  );
};

export default AktiveOrdrer;
