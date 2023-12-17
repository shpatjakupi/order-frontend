import React from 'react'
import { FiClock } from "react-icons/fi";
import { FaCircleInfo } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const About = (props) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (

    <div className='textCenter text-black bg-white mt-10 md:mt-0'>

        <div className='md:flex text-center justify-center md:justify-normal gap-5 items-center py-4 px-5'>
            <div className='flex items-center justify-center mb-1 md:mb-0'>
                <FcGoogle className='mr-1 text-md' />
                <p className=''> 4.5 </p>
            </div>
            <div className='flex items-center justify-center'>
                <FiClock className='mr-1 text-md' />
                <p> Åbent indtil 22.00</p>
            </div>
            <div className='flex items-center justify-center'>
                <FaCircleInfo className='text-md mr-1 text-blue-400' />
                <Button className='bg-transparent w-fit p-0 m-0' onPress={onOpen}>Se mere information</Button>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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
                        <p>Rentemestervej 94 <br />
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
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>

    </div>
  )
}

export default About