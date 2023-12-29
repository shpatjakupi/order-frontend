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
    <div className='mt-10 px-4'>
        <p>
            Bestil din mad her i løbet af få kliks.
        </p>
        <Menu />
        <Basket />
    </div>
  )
}

export default Orders