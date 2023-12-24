import React, {useState}  from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useUserContext } from 'context/usectx';

const SingleMenuItem = (props) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const {addToBasket, quantity, increaseQuantity, decreaseQuantity } = useUserContext();


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