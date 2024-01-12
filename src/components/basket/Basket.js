import React, { useEffect } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { useUserContext } from '../../context/usectx';

const Basket = () => {

    // states for the modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    // state that holds the value of menus in basket
    const { basketItems } = useUserContext();

    useEffect(() => {
        console.log(basketItems);
    },[basketItems])

    // Use reduce to calculate the total price
    const totalPrice = basketItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.totalPrice;
    }, 0);

    // func that gets total quantity of basket
    const totalQuantityInBasket = basketItems.reduce((total, item) => total + item.quantity, 0);



    
  return (
    <div className='fixed bottom-2 left-4 right-4 lg:w-1/3'>
        <Button className='bg-green-600	 w-full text-left flex justify-between items-center p-4 text-white basketbtn rounded-md' onPress={onOpen}>
            <div className='flex items-center'>
                <span className='mr-3 bg-white text-green-800 text-sm rounded-full px-[7px]'>{totalQuantityInBasket}</span>
                <p>Vis kurv</p>
            </div>

            <div>
                {`Pris: ${totalPrice} kr.`}
            </div>
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-xl border-b">Din bestilling</ModalHeader>
                <ModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {basketItems.length > 0 ? 
                basketItems.map((item) => (
                    <div key={item.id}>
                        <div 
                        key={item.id}
                        className=' bg-gray-100 px-4 py-3 rounded-md'
                        >
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <p className='mr-1'> {item.id}. </p>
                                    <p>{item.name}</p>
                                </div>
                                <p>x{item.quantity} </p>
                            </div>

                            {item.selectedToppings.length > 0 && (
                                <div className='mt-3'>
                                    <p className='font-bold'>Tilvalg:</p>
                                    <div>
                                        {item.selectedToppings.map((topping) => (
                                            <p key={topping}>{topping}</p>
                                        ))}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>

                ) )  
                : <p>Din indkøbskurv er tom.</p> 
                }
                {basketItems.length > 0 && (
                    <div className='mt-5'>
                        <label className='' htmlFor="comment">Kommentar:</label>
                        <Input
                            type="text"
                            id="comment"
                            className='mt-2'
                        />
                    </div>
                )}
                </ModalBody>
                <ModalFooter>
                <Button className='bg-green-600 w-full text-left flex justify-between p-4 text-white basketbtn rounded-md' onPress={onOpen}>
                    <div className='flex items-center'>
                        <span className='mr-3 bg-white text-green-600 text-sm rounded-full px-[7px]'>{totalQuantityInBasket}</span>
                        <p>Gå til kasse</p>
                    </div>

                    <div>
                    {`Pris: ${totalPrice} kr.`}
                    </div>
                </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    </div>
  )
}

export default Basket