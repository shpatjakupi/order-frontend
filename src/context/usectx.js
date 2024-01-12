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
          // State to store the fetched data
          const [tilvalg, setTilvalg] = useState('');

  const handleButtonClick = () => {
    // Increase basketItems by 1
    setBasketCount(prevBasketItems => prevBasketItems + 1);
  };

  const addToBasket = (item) => {
    // Calculate item price
    const itemPrice = parseFloat(item.price);
  
    // Check if selectedToppings is defined and is an array
    if (selectedToppings && Array.isArray(selectedToppings)) {
      // Generate a unique identifier for this menu item
      const uniqueIdentifier = `${item.id}-${selectedToppings.join('-')}`;
  
      // Calculate toppings price using reduce
      const toppingsPrice = selectedToppings.reduce((total, toppingName) => {
        // Find the topping in tilvalg array by name
        const selectedTopping = tilvalg.find((t) => t.name === toppingName);
        // If found, add the price, otherwise, add 0
        return total + (selectedTopping ? parseFloat(selectedTopping.price) : 0);
      }, 0);
  
      // Calculate total price
      const totalPrice = quantity * (itemPrice + toppingsPrice);
      console.log(`Total Price for ${uniqueIdentifier}:`, totalPrice);
  
      // Update the basketItems state with the new item
      setBasketItems((prevBasketItems) => [
        ...prevBasketItems,
        { ...item, quantity, selectedToppings, totalPrice, uniqueIdentifier },
      ]);
      console.log(basketItems);
    } else {
      // If no toppings are selected, calculate total price without toppings
      const totalPrice = quantity * itemPrice;
      console.log(`Total Price for ${item.id}:`, totalPrice);
  
      // Update the basketItems state with the new item
      setBasketItems((prevBasketItems) => [
        ...prevBasketItems,
        { ...item, quantity, selectedToppings, totalPrice },
      ]);
    }
  
    // Clear selected toppings for the next item
    setSelectedToppings([]);

    console.log(basketItems);
  
    // Rest of the function...
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
        setSelectedToppings,
        setTilvalg,
        tilvalg
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};
