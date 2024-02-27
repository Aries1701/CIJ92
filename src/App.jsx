import './App.css';
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 10);
  };

  const getProductDetail = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error('Error fetching product detail:', error);
    }
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <div className="product-container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.slice(0, visibleProducts).map(product => (
          <div key={product.id} className="product-item" onClick={() => getProductDetail(product.id)}>
            <img src={product.image} alt={product.title} />
            <p>Name: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
      <button className="load-more-btn" onClick={loadMoreProducts}>Xem thêm</button>
      {selectedProduct && (
        <div className="product-detail">
          <h2>Product Detail</h2>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <p>Name: {selectedProduct.title}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Category: {selectedProduct.category}</p>
          <button onClick={() => addToCart(selectedProduct)}>Thêm vào giỏ hàng</button>
          <button onClick={handleCloseDetail}>Đóng</button>
        </div>
      )}
      <div className="cart">
        <h2>Giỏ hàng</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Giỏ hàng trống</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
