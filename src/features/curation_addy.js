// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center' }}>
      <p>This is the footer of the website.</p>
    </footer>
  );
};


// App.js

import React from 'react';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      {/* Your existing website content */}
      <h1>Welcome to My React Website</h1>
      <p>This is the main content of the website.</p>
      
      {/* Add the footer component here */}
      <Footer />
    </div>
  );
};

