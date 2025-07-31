// src/components/SidebarFilter.js
import React from 'react';

const SidebarFilter = ({ filters, setFilters }) => {
  const handleSearch = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  return (
    <div style={{
      width: '250px',
      padding: '15px',
      borderRight: '1px solid #ddd',
      backgroundColor: '#fdfdfd',
      height: '100%',
    }}>
      <h4>🔎 Filter Products</h4>
      <input
        type="text"
        placeholder="Search by name"
        value={filters.search}
        onChange={handleSearch}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <label>📁 Category</label>
      <select value={filters.category} onChange={handleCategoryChange} style={{ width: '100%', padding: '5px' }}>
        <option value="">All</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Laptops">Laptops</option>
        <option value="PS5">PS5</option>
        <option value="Watches">Watches</option>
        <option value="Dresses">Dresses</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
};

export default SidebarFilter;
