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

    // State to store the fetched data
    const [data, setData] = useState(null);
    // State to track loading status
    const [loading, setLoading] = useState(true);
    // State to track errors
    const [error, setError] = useState(null);




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


  const fetchData = async () => {
            
    try {

        // Set loading to true while fetching data
        setLoading(true);

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('john:test1234'),
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

    // Helper function to capitalize the first letter of a string and make rest lowercase
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

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
        setOrderId,
        fetchData,
        data,
        loading,
        error,
        capitalizeFirstLetter
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};
