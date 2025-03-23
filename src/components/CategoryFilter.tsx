// src/components/CategoryFilter.tsx
import React, { useState } from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface CategoryFilterProps {
  onSelectCategory: (category: ProductCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    ProductCategory.ALL,
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as ProductCategory;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      {Object.values(ProductCategory).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;