import { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
  const [basketCount, setBasketCount] = useState(0);
  const [basketPrice, setBasketPrice] = useState(0);
  const [basketItems, setBasketItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleButtonClick = () => {
    // Increase basketItems by 1
    setBasketCount(prevBasketItems => prevBasketItems + 1);
  };

  const addToBasket = (item) => {
    // checks if the item is already in the basketItems array
    const existingItem = basketItems.find((basketItem) => basketItem.id === item.id);
  
    // Calculate the updated quantity based on the current state
    const updatedQuantity = quantity > 0 ? quantity : 1;
  
    if (existingItem) {
      // If the item is already in the basket, update its quantity
      const updatedBasketItems = basketItems.map((basketItem) =>
        basketItem.id === item.id ? { ...basketItem, quantity: basketItem.quantity + updatedQuantity } : basketItem
      );
  
      setBasketItems(updatedBasketItems);
    } else {
      // If the item is not in the basket, add it with the chosen quantity
      const updatedBasketItems = [...basketItems, { ...item, quantity: updatedQuantity }];
  
      setBasketItems(updatedBasketItems);
      console.log(updatedBasketItems);
    }
  
    // Reset the quantity to 1 after adding to the basket
    setQuantity(1);
  
  };
  
  const increaseQuantity = () => {
    setQuantity((number) => number + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity((number) => (number > 1 ? number - 1 : 1));
  };

  // You can add other context-related state or functions here

  return (
    <UserContext.Provider 
    value={{ 
        basketCount, 
        setBasketCount,
        handleButtonClick,
        basketPrice,
        setBasketPrice,
        addToBasket,
        basketItems,
        quantity,
        setQuantity,
        increaseQuantity,
        decreaseQuantity
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};
