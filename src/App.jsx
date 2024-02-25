import './App.css'; 
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const getProductDetails = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setSelectedProduct(data));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={() => getProductDetails(product.id)}>
            <div className='product'>
            <img className='img' src={product.image} alt={product.title} />
            <div className='info'>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
            </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div>
          <h2>Selected Product</h2>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <div>
            <h3>{selectedProduct.title}</h3>
            <p>Price: ${selectedProduct.price}</p>
            <p>Category: {selectedProduct.category}</p>
            <p>Description: {selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
