// src/components/ProductManager.tsx
import React, { useState } from 'react';
import {ProductCategory} from '../models/ProductCategory';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';
import products from '../api/products';
import Product from '../models/Product';
import '../styles/styles.css';

const ProductManager: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filterInStock, setFilterInStock] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    ProductCategory.ALL,
  );

  // Maneja el filtrado por categoría y stock
  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category); // Actualiza la categoría seleccionada

    let filtered = productList;

    // Filtra por categoría
    if (category !== ProductCategory.ALL) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filtra por stock si el checkbox está activado
    if (filterInStock) {
      filtered = filtered.filter((product) => product.stock > 0);
    }

    setFilteredProducts(filtered);
  };

  // Maneja el cambio en el checkbox de "Mostrar solo con stock"
  const handleToggleInStock = () => {
    const newFilterInStock = !filterInStock;
    setFilterInStock(newFilterInStock);

    let filtered = productList;

    // Filtra por categoría
    if (selectedCategory !== ProductCategory.ALL) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Filtra por stock si el checkbox está activado
    if (newFilterInStock) {
      filtered = filtered.filter((product) => product.stock > 0);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-manager">
      <h1>Listado de Productos</h1>
      <div className="filters">
        <div className="filter-in-stock">
          <input
            type="checkbox"
            checked={filterInStock}
            onChange={handleToggleInStock}
          />
          <label>Mostrar solo productos con stock</label>
        </div>
        <CategoryFilter onSelectCategory={handleSelectCategory} />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductManager;