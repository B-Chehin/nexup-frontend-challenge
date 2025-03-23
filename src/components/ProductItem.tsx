// src/components/ProductItem.tsx
import React from 'react';
import { ProductStatus } from '../models/ProductStatus';
import Product from '../models/Product';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor:
            product.status === ProductStatus.Active ? 'green' : 'red',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
        }}
      />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>{product.getFormattedPrice()}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductItem;