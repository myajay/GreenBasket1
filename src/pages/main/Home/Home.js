// import react from './react'
import './Home.css'
// import tomatoImage from './assets/tomoto1.jpg';
import tomatoImage from '../../../assets/tomoto1.jpg';

import { FaHeart } from 'react-icons/fa'; // Font Awesome icons
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const products = new Array(8).fill({
    title: 'TOMATO',
    price: '$30',
    description: '500g',
    image: tomatoImage,
  });
function Home(){

    const [isLiked, setIsLiked] = useState(false);

    const [showAlert, setShowAlert] = useState(false); // State to control the alert visibility
  
    // Function to hide the alert
    const handleClose = () => setShowAlert(false);
  
    // Toggle function for the heart icon
    const handleHeartClick = () => {
      setIsLiked(!isLiked);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    };

    return(
        <div>

            
      {showAlert && (
        <Alert variant="success" onClose={handleClose} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>Your item has been added to the cart.</p>
        </Alert>
      )}

      <div className="cards-container">
        {products.map((product, index) => (
          <div key={index} className="card">
            <div className="heart-icon-wrapper">
              <div
                style={{
                  display: 'inline-block', // Keeps it inline with other content
                  padding: '0px 5px', // Padding between the icon and the border
                  cursor: 'pointer', // Cursor changes to pointer on hover
                }}
                onClick={handleHeartClick} // Toggle on click
              >
                <FaHeart
                  size={14}
                  color={isLiked ? 'red' : 'grey'} // Red when liked, grey when not liked
                  style={{
                    transition: 'color 0.3s ease', // Smooth transition effect
                  }}
                />
              </div>
            </div>
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="card-content">
              <div className="card-header">
                <h3 className="card-title">{product.title}</h3>
                <h2 className="card-price">{product.price}</h2>
              </div>
              <p className="card-description">{product.description}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

        </div>
    )

}

export default Home;