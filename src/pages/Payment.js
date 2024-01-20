import React, {useEffect} from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import {Input, Textarea} from "@nextui-org/react";
import { useUserContext } from 'context/usectx';
import { Link, Button } from "@nextui-org/react";
import Footer from 'components/footers/Footer';
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";

const Payment = () => {

  const [fuldeNavn, setFuldeNavn] = React.useState("");
  const [adresse, setAdresse] = React.useState("");
  const [mail, setMail] = React.useState("");


  // state that holds the value of menus in basket
  const { basketItems, totalPrice } = useUserContext();

  useEffect(() => {
    console.log(basketItems);
  },[basketItems]);

  const MakeAnOrder = () => {
    console.log("hej");
  }

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
          value={fuldeNavn}
          onValueChange={setFuldeNavn}
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
          value={adresse}
          onValueChange={setAdresse}
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
          value={mail}
          onValueChange={setMail}
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

        <div className='bg-[#f5f5f5] p-3 rounded-lg'>
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
                <p className='mt-2 text-default-400'>{item.totalPrice} kr.</p>

                {item.selectedToppings.length > 0 && (
                    <div className='mt-3'>
                        <p className='font-bold'>Tilvalg:</p>
                        <div>
                            {item.selectedToppings.map((topping) => (
                                <p className='text-default-400' key={topping}>{topping}  </p>
                            ))}
                        </div>
                    </div>
                )}


            </div>
          </div>
        ))}

        <div className='mt-5'>
          <p className='mb-1'>Kommentar:</p>
          <Textarea           
          variant={'bordered'}
          placeholder="Kundens kommentar"
          className='rounded'
          color='secondary'>
          </Textarea>
        </div>
        
        <h3 className='mt-5 font-bold'>Total pris: {totalPrice} kr.</h3>

        </div>


        <div className='mt-5 mb-10'>
        <p className='text-sm'>
        Ved at gennemføre dette køb accepterer du vores handelsbetingelser
        Jeg accepterer, at jeg ved at gennemføre bestillingen, forpligter mig til at foretage en betaling, i overensstemmelse med de generelle handelsbetingelser.
        </p>
        </div>

        <div className="fixed bottom-2 left-0 right-0 flex justify-center mx-4 md:right-0 md:w-1/2">
          <Button
          onClick={MakeAnOrder}
          className="w-full bg-green-600 text-white font-bold rounded-lg h-12 text-lg">
            Bestil
          </Button>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Payment