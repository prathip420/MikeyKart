import React, { useState, useEffect } from 'react';
import CartIcon from '../components/CartIcon';
import productsData from '../data/productsData';

const categories = ['Mobiles', 'PS5', 'Watches', 'Dresses', 'Laptops', 'Computers', 'ACs'];

function ProductPage() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState(150000);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    const updatedCart = existing
      ? cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  let filteredProducts = productsData.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category ? product.category === category : true;
    const matchPrice = product.price <= maxPrice;
    return matchSearch && matchCategory && matchPrice;
  });

  if (sortOrder === 'low-to-high') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="product-page-wrapper">
        <aside className="sidebar-filter">
          <h4>🔍 Search & Filter</h4>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <label>Max Price: ₹{maxPrice}</label>
          <input
            type="range"
            min="1000"
            max="200000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />

          <label>Sort By</label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">None</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </aside>

        <main className="product-page">
          <h2>🛍️ Products</h2>
          <div className="products-container">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                </div>
                <button onClick={() => addToCart(product)} className="add-btn">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
      <CartIcon />
    </>
  );
}

export default ProductPage;