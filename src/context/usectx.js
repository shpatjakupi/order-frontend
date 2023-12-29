import { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
  const [basketCount, setBasketCount] = useState(0);
  const [basketPrice, setBasketPrice] = useState(0);
  const [basketItems, setBasketItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // State to store selected toppings
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleButtonClick = () => {
    // Increase basketItems by 1
    setBasketCount(prevBasketItems => prevBasketItems + 1);
  };

  const addToBasket = (item) => {
    const existingItem = basketItems.find((basketItem) => basketItem.id === item.id);
  
    const updatedQuantity = quantity > 0 ? quantity : 1;
  
    if (existingItem) {
      const updatedBasketItems = basketItems.map((basketItem) =>
        basketItem.id === item.id ? { ...basketItem, quantity: basketItem.quantity + updatedQuantity } : basketItem
      );
  
      setBasketItems(updatedBasketItems);
      console.log("Updated Basket Items:", updatedBasketItems);
    } else {
      const updatedBasketItems = [
        ...basketItems,
        { ...item, quantity: updatedQuantity, selectedToppings: item.selectedToppings },
      ];
  
      setBasketItems(updatedBasketItems);
      console.log("Updated Basket Items:", updatedBasketItems);
    }
  
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
        decreaseQuantity,
        selectedToppings,
        setSelectedToppings
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};
