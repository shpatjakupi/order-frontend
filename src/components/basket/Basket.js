import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useUserContext } from '../../context/usectx';

const Basket = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { basketCount, handleButtonClick, basketItems } = useUserContext();

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
                {basketItems.map((item) => (
                    <div 
                    key={item.id}
                    className='flex justify-between'
                    >
                        <p>{item.name}</p>
                        <p>x {item.quantity} </p>
                    </div>
                ))}
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