import React from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface CategoryFilterProps {
  onSelectCategory: (category: ProductCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectCategory }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as ProductCategory;
    onSelectCategory(category);
  };

  return (
    <div className="category-filter-wrapper">
      <select className="category-filter" onChange={handleChange}>
        {Object.values(ProductCategory).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;