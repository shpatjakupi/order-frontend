import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import SingleMenuItem from './SingleMenuItem';
import ScrollSpy from "react-ui-scrollspy";
import {Input} from "@nextui-org/react";
import { useUserContext } from 'context/usectx';

const Menu = () => {

    const {fetchData, data, error, loading, capitalizeFirstLetter} = useUserContext();
    const [selectedCategory, setSelectedCategory] = useState(null);
    // func that gets the foodkeys only 
    const uniqueCategories = data ? [...new Set(data.map(item => item.foodKey.replace(/_/g, ' ')))] : [];

    const processCategories = (categories) => {
      return categories.map(category => category.toLowerCase().replace(/\s+/g, '-'));
    };

    const processedCategories = processCategories(uniqueCategories);

    // triggers fetch as soon as the component gets called
    useEffect(() => {
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
        <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
          <div className='lg:w-100'>
            <Input
            className='rounded-none w-100 border-none focus:border-transparent focus:ring-0'
              type="email"
              placeholder="Søg i Ordrups Pizza"
              labelPlacement="outside"
              endContent={
                <FaSearch className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              />
          </div>
        
        <div className='mt-7'>
          {uniqueCategories.map((category, index) => (
            <div key={category}>
              <h2 id={processedCategories[index]} className='text-4xl font-bold my-5'>{capitalizeFirstLetter(category)}</h2>
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
        </ScrollSpy>
    </>
  )
}

export default Menu