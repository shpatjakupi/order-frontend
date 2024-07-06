import React, { useEffect } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { useUserContext } from '../../context/usectx';
import { Link } from 'react-router-dom';
import {Textarea} from "@nextui-org/react";

const Basket = () => {

    // states for the modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    // state that holds the value of menus in basket
    const { basketItems, totalPrice, kommentar, setKommentar } = useUserContext();

    // // state that holds the comment value from user if user has a comment for his order
    // const [kommentar, setKommentar] = React.useState("");

    useEffect(() => {
        console.log(basketItems);
    },[basketItems])

    // Use reduce to calculate the total price
    // const totalPrice = basketItems.reduce((accumulator, currentItem) => {
    //     return accumulator + currentItem.totalPrice;
    // }, 0);

    // func that gets total quantity of basket
    const totalQuantityInBasket = basketItems.reduce((total, item) => total + item.quantity, 0);


    const sendOrder = () => {
        // console.log("hej");
    }



    
  return (
    <div className='fixed bottom-2 left-6 lg:left-14 right-6 lg:w-1/3'>
        <Button className='bg-green-600 cursor-pointer w-full flex justify-between items-center p-4 text-white basketbtn rounded' onPress={onOpen}>
            <div className='flex items-center'>
                <span className='mr-3 bg-white text-green-800 text-sm rounded-full px-[7px]'>{totalQuantityInBasket}</span>
                <p>Vis kurv</p>
            </div>

            <div>
                {`Pris: ${totalPrice} kr.`}
            </div>
        </Button>
        <Modal className=' z-50' isOpen={isOpen} onOpenChange={onOpenChange}>
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
                                <p className='bg-white px-3 py-1 rounded-lg'>{item.quantity} </p>
                            </div>
                            <p className='mt-2'>{item.totalPrice} kr.</p>

                            {item.selectedToppings.length > 0 && (
                                <div className='mt-3'>
                                    <p className='font-bold'>Tilvalg:</p>
                                    <div>
                                        {item.selectedToppings.map((topping) => (
                                            <p key={topping}>{topping}  </p>
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
                        <Textarea
                        value={kommentar}
                        onValueChange={setKommentar}
                        label="Kommentar"
                        variant="bordered"
                        placeholder="Skriv en kommentar til restauranten her"
                        disableAnimation
                        disableAutosize
                        classNames={{
                            input: "resize-y min-h-[40px] w-full",
                        }}
                        />
                    </div>
                )}
                </ModalBody>
                <ModalFooter>
                <Button 
                className={`bg-green-600 text-left w-full p-4 text-white basketbtn rounded-md`} onPress={onOpen}
                >
                    <Link className='flex justify-between w-full' to="/payment">
                    <div className='flex items-center'>
                        <span className='mr-3 bg-white text-green-600 text-sm rounded-full px-[7px]'>{totalQuantityInBasket}</span>
                        <p>Gå til kasse</p>
                    </div>

                    <div>
                    {`Pris: ${totalPrice} kr.`}
                    </div>
                    </Link>
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