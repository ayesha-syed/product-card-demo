import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductCard from './components/ProductCard';

const root = ReactDOM.createRoot(document.getElementById('root'));

const mockProduct = {
  id: 1,
  name: 'Premium Wireless Headphones',
  price: 129.99,
  description: 'High-quality sound with noise cancellation',
  reviews: 234,
  image: 'https://via.placeholder.com/280x240?text=Headphones'
};

root.render(
  <React.StrictMode>
    <ProductCard product={mockProduct} />
  </React.StrictMode>
);
