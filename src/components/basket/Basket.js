import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { useUserContext } from '../../context/usectx';

const Basket = () => {

    // states for the modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    // state that holds the value of menus in basket
    const { basketItems } = useUserContext();

    // func that gets total quantity of basket
    const totalQuantityInBasket = basketItems.reduce((total, item) => total + item.quantity, 0);
    
  return (
    <div className='fixed bottom-2 left-4 right-4'>
        <Button className='bg-blue-400 w-full text-left flex justify-between items-center p-4 text-white basketbtn rounded-md' onPress={onOpen}>
            <div className='flex items-center'>
                <span className='mr-3 bg-white text-blue-400 text-sm rounded-full px-[7px]'>{totalQuantityInBasket}</span>
                <p>Vis ordre</p>
            </div>

            <div>
                Pris: 0,00 kr.
            </div>
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-xl border-b">Din bestilling</ModalHeader>
                <ModalBody>
                {basketItems.length > 0 ? 
                basketItems.map((item) => (
                    <div>
                        <div 
                        key={item.id}
                        className='flex justify-between'
                        >
                            <p>{item.name}</p>
                            <p>x {item.quantity} </p>
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
                <Button className='bg-blue-400 w-full text-left flex justify-between p-4 text-white basketbtn rounded-md' onPress={onOpen}>
                    <div className='flex items-center'>
                        <span className='mr-3 bg-white text-blue-400 text-sm rounded-full px-[7px]'>{totalQuantityInBasket}</span>
                        <p>Gå til kasse</p>
                    </div>

                    <div>
                        Pris: 0,00 kr.
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