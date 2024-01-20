import React, {useEffect} from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import {Input} from "@nextui-org/react";
import { useUserContext } from 'context/usectx';
import { Link, Button } from "@nextui-org/react";
import Footer from 'components/footers/Footer';
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";

const Payment = () => {

  // state that holds the value of menus in basket
  const { basketItems, totalPrice } = useUserContext();

  useEffect(() => {
    console.log(basketItems);
  },[basketItems])

  return (
    <div className='mb-16'>
      <div className='m-5 md:w-1/2'>
        <Button
          href="/order"
          as={Link}
          variant="solid"
          className='mb-10 bg-gray-100'
          startContent={<IoIosArrowRoundBack className='text-xl' />}
        >
          Tilbage
        </Button>

        <p className='text-5xl font-extrabold mb-3 lg:text-left'>Check ud 👋</p>
        <p className='text-2xl font-bold lg:text-left'>Ordrups Pizza</p>


        <div className='my-10 rounded'>
          <p className='font-bold text-2xl mb-2'>Dine oplysninger</p>
          <Input
          size='md'
          type="text"
          label="Fulde navn"
          placeholder="Hans Jensen"
          labelPlacement="inside"
          className='mb-4'
          endContent={
            <MdDriveFileRenameOutline className="text-2xl text-default-300 pointer-events-none flex-shrink-0 " />
          }
          />
          <Input
          size='md'
          type="text"
          label="Addresse"
          placeholder="Roskildevej 542, 2000 frederiksberg"
          labelPlacement="inside"
          className='mb-4'
          endContent={
            <FaHome className="text-2xl text-default-300 pointer-events-none flex-shrink-0" />
          }
          />
          <Input
          size='md'
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="inside"
          endContent={
            <IoMdMail className="text-2xl text-default-300 pointer-events-none flex-shrink-0" />
          }
          />
        </div>

        <div className='bg-gray-100 p-3 rounded-md'>
        <h2 className='text-2xl font-bold'>Din ordrer fra</h2>
        <p className=' font-light text-sm'>Ordrups Pizza</p>
        {basketItems.map((item) => (
          <div className='border-b border-gray-300' key={item.id}>
            <div 
            key={item.id}
            className='py-3 rounded-md'
            >
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <p className='mr-1'> {item.id}. </p>
                        <p>{item.name}</p>
                    </div>
                    <p className='bg-white px-3 py-1 rounded-lg'>{item.quantity} </p>
                </div>
                <p className='mt-2 text-neutral-400		'>{item.totalPrice} kr.</p>

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
        ))}
        <h3 className='mt-5 font-bold'>Total pris: {totalPrice} kr.</h3>
        {/* You can add a payment form or other components related to payment */}
        </div>

        <div className='mt-5 mb-10'>
        <p className='text-sm'>
        Ved at gennemføre dette køb accepterer du vores handelsbetingelser
        Jeg accepterer, at jeg ved at gennemføre bestillingen, forpligter mig til at foretage en betaling, i overensstemmelse med de generelle handelsbetingelser.
        </p>
        </div>

        <div className="fixed bottom-2 left-0 right-0 flex justify-center mx-4 md:right-0 md:w-1/2">
          <Button className="w-full bg-green-600 text-white font-bold rounded-md h-12 text-lg">Bestil</Button>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Payment