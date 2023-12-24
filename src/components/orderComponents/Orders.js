import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaCircleInfo } from "react-icons/fa6";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { FiClock } from "react-icons/fi";
import Basket from 'components/basket/Basket';
import Menu from 'components/Menu/Menu';

const Orders = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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

                <Menu />

        </div>

            <Basket />

    </div>
  )
}

export default Orders