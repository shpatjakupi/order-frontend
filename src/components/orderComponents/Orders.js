import React from 'react'
import {useDisclosure} from "@nextui-org/react";
import Basket from 'components/basket/Basket';
import Menu from 'components/Menu/Menu';

const Orders = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className='mt-10'>
        <Menu />
        <Basket />
    </div>
  )
}

export default Orders