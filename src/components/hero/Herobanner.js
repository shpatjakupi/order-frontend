import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const url = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Herobanner = (props) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <>

        <div 
        className='h-[300px] md:h-[320px] relative img wrappper lg:mx-14 lg:rounded-xl'
        >
          <img className='h-full w-full object-cover z-50 img lg:rounded-xl' src={url} />
          <div className='absolute bg-[#0000009e] h-full w-full top-0 lg:rounded-xl'>
          </div>

          <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center text-white'>
            <div className='text-center'>
              <h1 className='text-4xl lg:text-5xl font-semibold'>Ordrups Pizza</h1>

              <div className='mt-6 backdrop-blur-sm bg-white/30 p-3 rounded-lg'>
                <p className='font-semibold mb-1'>Åbningstider</p>
                <p className='text-sm md:text-md font-light text-white'>Mandag - Fredag: <span className='text-[#fdfdfdda]'>13.00 - 22.00</span></p>
                <p className='text-sm md:text-md font-light text-white'>Lørdag - Søndag: <span className='text-[#fdfdfdda]'>11.00 - 22.00</span></p>

                <Button startContent={<FaCircleInfo className='text-sm md:text-md text-blue-300 mr-[-4px]' />} className='bg-transparent w-fit p-0 m-0 text-sm md:text-md text-white' onPress={onOpen}>Se mere information</Button>
                <Modal className='z-[1000px]' isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                  {(onClose) => (
                      <>
                      <ModalHeader className="flex flex-col gap-1">
                          <h2 className='text-xl font-bold'>Ordrups Pizza</h2>
                          <div className='flex items-center'>
                              <div className='bg-red-500 dark:bg-[#65e295] w-[12px] h-[12px] rounded-full mr-1 shrinkAndGrow animate-pulse text-sm'></div>
                              <p className='text-sm text-[#717173] font-light'>Tirsdag 11.00–22.00</p>
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
              </div>
            </div>

          </div>

        </div>

    </>
  )
}

export default Herobanner