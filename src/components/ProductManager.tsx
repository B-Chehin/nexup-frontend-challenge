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

  // Simula la carga de productos desde una API
  useEffect(() => {
    setTimeout(() => {
      setProductList(products);
      setFilteredProducts(products);
    }, 1000);
  }, []);

  // Maneja el filtrado por categoría
  const handleSelectCategory = (category: ProductCategory) => {
    if (category === ProductCategory.ALL) {
      setFilteredProducts(productList);
    } else {
      const filtered = productList.filter(
        (product) => product.category === category,
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <h1>Listado de Productos</h1>
      <CategoryFilter onSelectCategory={handleSelectCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductManager;