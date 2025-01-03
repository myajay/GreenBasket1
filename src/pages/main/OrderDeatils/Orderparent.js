import React, {   useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
// import OrderDetails from './OrderDetails'; // Import the child component

const OrderParent = () => {
  // Sample order data
  const order = {
    orderId: '12345',
    customerName: 'Ajay',
    items: [
      { name: 'Tomato', quantity: 3, price: 30 },
      { name: 'Cucumber', quantity: 2, price: 20 },
    ],
    totalAmount: 120,
  };

  const navigate = useNavigate(); 
  useEffect(() => {
    // If you want to delay the navigation, use setTimeout
    const timeoutId = setTimeout(() => {
      navigate('/Home'); // Navigate to home after 3 seconds
    }, 3000);

    // Clean up timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="order-parent">
      <h1>Add cart page is in work in progress, rdirecting to home page</h1>
      {/* Pass the order data as props to the child component */}
      <p order={order}></p>
      {/* <OrderDetails order={order} /> */}
    </div>
  );
};

export default OrderParent;
