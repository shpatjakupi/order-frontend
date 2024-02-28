import React, { useEffect, useState } from 'react'
import { useUserContext } from 'context/usectx';

const Check = () => {

  // state where the orderid for the current order is saved
  const { orderId } = useUserContext();
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to track errors
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
                
      try {

          // Set loading to true while fetching data
          setLoading(true);

          const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa('john:test1234'),
            },
            mode: 'cors', // Ensure you set the mode to 'cors'
          };
            
            const response = await fetch(`http://order.eu-north-1.elasticbeanstalk.com/customer/getOrderCompletionTime/${orderId}`, requestOptions);                  
        
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response data as JSON
        const result = await response.json();

        // Set the fetched data in the state
        console.log(result);
      } catch (error) {
        // Set error state if there is an error
        setError(error);
      } finally {
        // Set loading to false when the request is complete
        setLoading(false);
      }

    };

    fetchData();

  }, [])
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen text-center'>
        <p className='font-bold mb-2 text-2xl'>Stay here for some seconds...</p>
        <p>You will soon see when the order can be picked up</p>
        <p>Order number: {orderId} </p>
      </div>
    </>
  )
}

export default Check