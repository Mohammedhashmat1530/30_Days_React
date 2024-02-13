import React from 'react';
import ReactDOM from 'react-dom/client'

// Create a style object for the main JSX

const mainStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#333',
    backgroundColor: '#80f0f8',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };
  
  const main = (
    <div style={mainStyle}>
      <h1>Your Full Name</h1>
      <p>Country: Your Country</p>
      <p>Title: Your Title</p>
      <p>Gender: Your Gender</p>
      <p>Email: Your Email</p>
      <p>Phone Number: Your Phone Number</p>
    </div>
  );

  const root =ReactDOM.createRoot(document.getElementById('root'));

  root.render(main);
  