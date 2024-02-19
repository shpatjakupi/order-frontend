import React, { useEffect } from 'react'
import { useUserContext } from 'context/usectx';

const Check = () => {

  const { basketItems, totalPrice, kommentar, currentOrder, setCurrentOrder } = useUserContext();


  useEffect(() => {

    // const url = `http://order.eu-north-1.elasticbeanstalk.com/customer/getOrderCompletionTime/65`; 

    console.log(currentOrder);



  }, [])
  return (
    <div>Check</div>
  )
}

export default Check