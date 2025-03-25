import React from 'react';
import { ProductStatus } from '../models/ProductStatus';
import Product from '../models/Product';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <div
        className={`status-indicator ${
          product.status === ProductStatus.Active ? 'status-active' : 'status-inactive'
        }`}
      />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">Stock: {product.stock}</p>
      </div>
    </div>
  );
};

export default ProductItem;