import React, { useEffect } from 'react'
import { useUserContext } from 'context/usectx';

const Check = () => {

  const { orderId, setOrderId} = useUserContext();


  useEffect(() => {

    const url = `http://order.eu-north-1.elasticbeanstalk.com/customer/getOrderCompletionTime/${orderId}`; 

    console.log(orderId);



  }, [])
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen text-center'>
        <p className='font-bold mb-2 text-2xl'>Stay here for some seconds...</p>
        <p>A message will come with a specific time for when the order can be picked up</p>
        <p>Order number: {orderId} </p>
      </div>
    </>
  )
}

export default Check