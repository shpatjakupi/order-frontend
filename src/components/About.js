import React from 'react'
import { FiClock } from "react-icons/fi";
import { FaCircleInfo } from "react-icons/fa6";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const About = (props) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (

    <div className='textCenter text-black bg-white  mt-14 md:mt-0'>

        <div className='text-center mt-5 md:mt-10'>
            <Tooltip content="Bliv ført til bestilling!">
                <Link to="../order">
                <Button  className='bg-green-600 text-white font-semibold text-md px-12 btn-4 rounded-md'>Bestil</Button>               
                </Link>

            </Tooltip>
        </div>
{/* 
        <div className='md:flex text-center justify-center gap-5 items-center py-4 px-5'>

            <div className='flex items-center justify-center'>
                <FiClock className='mr-1 text-md' />
                <p> Åbent indtil 22.00</p>
            </div>
            
            <Button startContent={<FaCircleInfo className='text-md text-blue-400 mr-[-4px]' />} className='bg-transparent w-fit p-0 m-0 text-md' onPress={onOpen}>Se mere information</Button>
            <Modal className='z-[1000px]' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">
                        <h2 className='text-xl font-bold'>Ordrups Pizza</h2>
                        <div className='flex items-center'>
                            <div className='bg-red-500 dark:bg-[#65e295] w-[12px] h-[12px] rounded-full mr-1 shrinkAndGrow animate-pulse text-sm'></div>
                            <p className='text-sm text-[#717173] font-light'>Søndag 11.00–21.00</p>
                        </div>
                    </ModalHeader>
                    <hr />
                    <ModalBody>
                        <p> 
                        Bestil lækker og velsmagende pizza, pastaretter, burger og meget mere hos Ordrup’s Pizza, hvor prisen er lav og kvaliteten høj. Vi glæder os til at se dig i Charlottenlund, og lægger vægt på at give dig en god service. 
                        </p>

                        <p className='font-bold text-lg mb-[-10px]'>Adresse:</p>
                        <p className='text-[#717173]'>Ordrupvej 102, <br />
                        2920 Charlottenlund</p>

                        <p className='font-bold text-lg mb-[-8px]'>Åbningstider:</p>
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
                        Luk
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>

        </div> */}

    </div>
  )
}

export default About