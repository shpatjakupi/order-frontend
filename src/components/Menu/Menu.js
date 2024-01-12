import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import SingleMenuItem from './SingleMenuItem';

const Menu = () => {

    // State to store the fetched data
    const [data, setData] = useState(null);
    // State to track loading status
    const [loading, setLoading] = useState(true);
    // State to track errors
    const [error, setError] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState(null);

    // func that gets the foodkeys only 
    const uniqueCategories = data ? [...new Set(data.map(item => item.foodKey.replace(/_/g, ' ')))] : [];

    // triggers fetch as soon as the component gets called
    useEffect(() => {
        const fetchData = async () => {
            
            try {

                // Set loading to true while fetching data
                setLoading(true);

                const headers = new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('john:test123'),
                  });
                  
                  const requestOptions = {
                    method: 'GET',
                    headers: headers,
                  };
                  
                  const response = await fetch('http://order.eu-north-1.elasticbeanstalk.com/menu/food', requestOptions);                  
              
              // Check if the response is successful (status code 200-299)
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
      
              // Parse the response data as JSON
              const result = await response.json();
      
              // Set the fetched data in the state
              setData(result);
            } catch (error) {
              // Set error state if there is an error
              setError(error);
            } finally {
              // Set loading to false when the request is complete
              setLoading(false);
            }

        };

        fetchData();

    }, []);

    // Render content based on loading and error states
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

  return (
    <>
        <div className='mt-7'>
          {uniqueCategories.map(category => (
            <div key={category}>
              <h2 className='text-4xl font-bold my-5'>{category}</h2>
              <div className='lg:flex lg:flex-wrap lg:justify-between'>
              {data && data
                .filter(item => item.foodKey.replace(/_/g, ' ') === category) // Adjust the filter here
                .map(item => (
                  <SingleMenuItem key={item.id} uniqueCategories={uniqueCategories} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Menu