import React, {useState, useEffect}  from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useUserContext } from 'context/usectx';
import {Checkbox} from "@nextui-org/react";

const SingleMenuItem = (props) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const {addToBasket, quantity, increaseQuantity, decreaseQuantity } = useUserContext();

        // State to store the fetched data
        const [tilvalg, setTilvalg] = useState('');
        // State to track loading status
        const [loading, setLoading] = useState(true);
        // State to track errors
        const [error, setError] = useState(null);

        // triggers fetch as soon as the component gets called
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
                      
                      const response = await fetch('http://order.eu-north-1.elasticbeanstalk.com/menu/filling?foodId=39', requestOptions);                  
                  
                  // Check if the response is successful (status code 200-299)
                  if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
          
                  // Parse the response data as JSON
                  const result = await response.json();
          
                  // Set the fetched data in the state
                  setTilvalg(result);
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
        // console.log(props.item.foodKey);

        const filterTilvalgForMenu = (tilvalg, menuFoodKey) => {
            return tilvalg.filter(item => 
              item.foodKey && item.foodKey.split(',').some(key => key.trim() === menuFoodKey.trim())
            );
          };
        


  return (
    <div>
    <Button 
    onPress={onOpen} 
    key={props.item.id} 
    className='w-full justify-between items-baseline h-24 mb-5 bg-gray-100 rounded-md hover:bg-gray-300'
    >
        <div className='w-1/2 max-w-[50%] text-left'>
            <p className='font-semibold mb-1'>{props.item.name}</p>
            <p className='text-xs text-[#717173]'>{props.item.description}</p>
            <p className='mt-2'>{props.item.foodKey}</p>
        </div>
        <div>
        <p className='mt-5 text-sm text-blue-400'>{`${props.item.price} kr.`}</p>
        </div>                    
    </Button>
    <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
     >
        <ModalContent>
        {(onClose) => (
            <>
            <ModalHeader className="flex flex-col gap-1 border-b">
                {props.item.name}
            </ModalHeader>
            <ModalBody>
                <p className='text-blue-400'>
                    {props.item.price} kr.
                </p>
                <p> 
                    {props.item.description}
                </p>
                
                <div>
                    <p className='text-md font-semibold mb-2'>
                        Tilvalg
                    </p>
                    {filterTilvalgForMenu(tilvalg, props.item.foodKey).map((item) => (
                        <div className='flex justify-between items-ce mb-2'>
                        <div className='flex'>
                            <Checkbox color='default' />
                            <p className='text-sm'>{item.name}</p>
                        </div>
                        <p className='text-sm text-blue-400'>{item.price} kr.</p>
                        </div>
                    ))}
                </div>

            </ModalBody>
            <ModalFooter className='flex justify-between'>
                <div className='flex justify-between items-center gap-4 px-3 bg-gray-200 rounded-md text-blue-400'>
                    <p 
                    className='cursor-pointer bg-white rounded-full px-[8px]'
                    onClick={decreaseQuantity}
                    >
                        -
                    </p>
                    <p>{quantity}</p>
                    <p 
                    className='cursor-pointer bg-white rounded-full px-[8px]'
                    onClick={increaseQuantity}
                    >
                        +
                    </p>
                </div>
                <Button onClick={() => addToBasket(props.item)} className='bg-blue-400 text-white rounded-md' onPress={onClose}>
                Tilføj til bestilling
                </Button>
            </ModalFooter>
            </>
        )}
        </ModalContent>
    </Modal>
    </div>
  )
}

export default SingleMenuItem