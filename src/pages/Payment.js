import React, {useEffect, useState} from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import {Input, Textarea} from "@nextui-org/react";
import { useUserContext } from 'context/usectx';
import { Button } from "@nextui-org/react";
import Footer from 'components/footers/Footer';
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Payment = () => {

  const [fuldeNavn, setFuldeNavn] = useState("");
  const [adresse, setAdresse] = useState("");
  const [mail, setMail] = useState("");
  const [responseMessage, setResponseMessage] = useState('');

  // state that holds the value of menus in basket
  const { basketItems, totalPrice, kommentar } = useUserContext();

  const leveringtidspunkter = [
    'Hurtigst muligt',
    '13.00',
    '13.30',
    '14.00',
    '14.30'
  ];

  useEffect(() => {
    console.log(basketItems);
  },[basketItems]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isBtnDisabled = () => {
    return !fuldeNavn || !adresse || !mail || !isValidEmail(mail);
  };

  const MakeAnOrder = async (e) => {

    e.preventDefault();
  
    // Map basketItems to the expected structure in the items array
    const itemsData = basketItems.map((basketItem) => ({
      "description": basketItem.description,
      "price": basketItem.price,
      "quantity": basketItem.quantity,
      "selectedToppings": basketItem.selectedToppings.join(', '),
      "totalPrice": basketItem.totalPrice
      // ... andre relevante egenskaber fra basketItem
    }));
  
    const data = {
      "order": {
        "name": fuldeNavn,
        "details": adresse,
        "fullPrice": totalPrice,
        "orderedDate": '2024-02-05 22:00:00', // Check the format
        "pickUpDate": '2024-02-05 22:30:00',  // Check the format
        "preOrder": false,
        "orderDone": false,
        "comment": "Pizza ekstra sprød",
      },
      "items": itemsData
    };
    

    const requestOptions = {
      "method": 'POST',
      "headers": {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('john:test1234'),
      },
      "mode": 'cors', // Ensure you set the mode to 'cors'
      "body": JSON.stringify(data),
    };

    try {
      const response = await fetch('http://order.eu-north-1.elasticbeanstalk.com/customer/sendOrder', requestOptions);            

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response data as JSON
      const responseData = response;

      // Set the fetched data in the state
      console.log("response data " + responseData);

          // Set success message
    setResponseMessage('Order placed successfully!');

    } catch (error) {
      console.log(error);
      if(error.response) {
        console.log(error.response);
      }
      setResponseMessage('An error occurred while sending the request.');
    }

  };
  

  return (
    <div className='mb-16'>
      <div className='m-5 md:w-1/2'>
        <button
          href="/order"
          variant="solid"
          className='mb-10 bg-gray-100 flex justify-center items-center rounded-md p-2 px-3 cursor-pointer'
        >
          <Link to="/order" className='flex items-center text-black'>
          <IoIosArrowRoundBack className='text-xl mr-1' />
          Tilbage
          </Link>

        </button>

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

        <div className='bg-[#f5f5f5] p-3 rounded-lg mb-10'>
          <p className='font-bold text-2xl mb-3'>Afhentning</p>
          <Autocomplete 
            variant={'bordered'}
            labelPlacement={'outside'}
            label="Vælg et tidspunkt for afhentning" 
            className="max-w-xs" 
          >
            {leveringtidspunkter.map((tidspunkt, index) => (
              <AutocompleteItem key={index} value={tidspunkt}>
                {tidspunkt}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          
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
          <p className='mb-1'>Din kommentar</p>
          <Textarea      
          isReadOnly     
          variant={'bordered'}
          placeholder={kommentar ? kommentar : 'Ingen kommentar til restauranten'}
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
          disabled={!fuldeNavn || !adresse || !mail || !isValidEmail(mail)}
          className={`w-full bg-green-600  text-white font-bold rounded-lg h-12 text-lg ${isBtnDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
            Bestil
          </Button>
        </div>
        <p>{responseMessage}</p>
      </div>
      <Footer domain="Ordrupspizza" />
    </div>

  )
}

export default Payment