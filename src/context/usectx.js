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
  // state that holds the comment value from user if user has a comment for his order
  const [kommentar, setKommentar] = useState("");
  // current order that handles the payment step gets the specific order
  const [currentOrder, setCurrentOrder] = useState();

    const [orderId, setOrderId] = useState();


  const handleButtonClick = () => {
    // Increase basketItems by 1
    setBasketCount(prevBasketItems => prevBasketItems + 1);
  };

  const addToBasket = (item) => {
    // Calculate item price
    const itemPrice = parseFloat(item.price);
  
    // Generate a unique identifier for this menu item, including toppings if any
    const uniqueIdentifier = selectedToppings && Array.isArray(selectedToppings) && selectedToppings.length > 0
      ? `${item.id}-${selectedToppings.join('-')}`
      : item.id;
  
    // Calculate toppings price using reduce if toppings are selected
    const toppingsPrice = selectedToppings && Array.isArray(selectedToppings) 
      ? selectedToppings.reduce((total, toppingName) => {
          // Find the topping in tilvalg array by name
          const selectedTopping = tilvalg.find((t) => t.name === toppingName);
          // If found, add the price, otherwise, add 0
          return total + (selectedTopping ? parseFloat(selectedTopping.price) : 0);
        }, 0)
      : 0;
  
    // Calculate total price
    const totalPrice = quantity * (itemPrice + toppingsPrice);
  
    setBasketItems((prevBasketItems) => {
      // Find if the item already exists in the basket
      const existingItemIndex = prevBasketItems.findIndex(basketItem => basketItem.uniqueIdentifier === uniqueIdentifier);
  
      if (existingItemIndex !== -1) {
        // Item exists, update its quantity and total price
        const updatedBasketItems = [...prevBasketItems];
        const existingItem = updatedBasketItems[existingItemIndex];
  
        // Update quantity and total price
        const newQuantity = existingItem.quantity + quantity;
        const newTotalPrice = existingItem.totalPrice + totalPrice;
  
        updatedBasketItems[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
          totalPrice: newTotalPrice
        };
  
        return updatedBasketItems;
      } else {
        // Item does not exist, add new item to basket
        return [
          ...prevBasketItems,
          { ...item, quantity, selectedToppings, totalPrice, uniqueIdentifier }
        ];
      }
    });
  
    // Clear selected toppings for the next item
    setSelectedToppings([]);
    
    console.log(basketItems);
  };
  
  
  
  const increaseQuantity = () => {
    setQuantity((number) => number + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity((number) => (number > 1 ? number - 1 : 1));
  };

  // Use reduce to calculate the total price
  const totalPrice = basketItems.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.totalPrice;
  }, 0);

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
        tilvalg,
        totalPrice,
        kommentar,
        setKommentar,
        currentOrder,
        setCurrentOrder,
        orderId,
        setOrderId
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};
