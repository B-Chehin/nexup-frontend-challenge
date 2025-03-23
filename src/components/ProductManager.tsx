// src/components/ProductManager.tsx
import React, { useState, useEffect } from 'react';
import products from '../api/products';
import {ProductCategory} from '../models/ProductCategory';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';
import Product from '../models/Product';

const ProductManager: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterInStock, setFilterInStock] = useState<boolean>(false); // Estado para el checkbox

  // Simula la carga de productos desde una API
  useEffect(() => {
    setTimeout(() => {
      setProductList(products);
      setFilteredProducts(products);
    }, 1000);
  }, []);

  // Maneja el filtrado por categoría y stock
  const handleSelectCategory = (category: ProductCategory) => {
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

    // Filtra por stock si el checkbox está activado
    if (newFilterInStock) {
      filtered = filtered.filter((product) => product.stock > 0);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Listado de Productos</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filterInStock}
            onChange={handleToggleInStock}
          />
          Mostrar solo productos con stock
        </label>
      </div>
      <CategoryFilter onSelectCategory={handleSelectCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductManager;