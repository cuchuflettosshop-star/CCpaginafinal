import React from 'react';
import { categories } from '../data/categories';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Filter by Category</h3>
      
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('')}
          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
            selectedCategory === ''
              ? 'bg-primary text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          All Categories
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;