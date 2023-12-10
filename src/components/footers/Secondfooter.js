import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Secondfooter() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className='fixed bottom-1 left-1/2 bg-opacity-80 backdrop-blur-md transform -translate-x-1/2 transform -translate-y-1/2 px-4 py-2 justify-center rounded-md w-[350px]'>

        <ul className='flex justify-between rounded-md items-center'>
            <li className=' font-bold text-[#fcda9a]'>
                <Button 
                onPress={onOpen}
                className='m-0 p-0 bg-transparent text-[#fcda9a] font-bold text-md'
                >
                    About us
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">About us</ModalHeader>
                        <ModalBody>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                            Close
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
            </li>
            <li className='font-bold text-[#fcda9a]'>Smiley Rapport</li>
            <li className='font-bold text-[#fcda9a]'>Third Item</li>
        </ul>

    </div>
  )
}
