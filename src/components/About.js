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
            <Tooltip offset={15} showArrow={true} content="Bliv ført til bestilling!">
                <Link to="../order">
                <Button  className='bg-green-600 text-white font-semibold text-md px-12 btn-4 rounded-md'>Bestil</Button>               
                </Link>
            </Tooltip>
        </div>

    </div>
  )
}

export default About