import { useState } from "react";

const FilterSection = ({
  priceRange,
  handlePriceChange,
  categories,
  selectedCategory,
  handleCategoryChange,
  handleSearchQuery,
  sortOrder,
  handleSorting,
  handleClose,
}) => {
  const [search, setSearch]= useState("");
  return (
    <div className=" flex flex-col gap-3">
      {/* Price Range */}
      <div className=" p-4 rounded-lg shadow">
        <p className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </p>
        {/* Min Range  */}
        <div className=" flex items-center py-0.5 space-x-4">
          <input
            type="number"
            min="0"
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="w-15 p-0.5 text-sm text-center border-2 border-[#C6D870] rounded-md focus:outline-none focus:border-[#C6D870] focus:ring-2 focus:ring-[#C6D870]/50"
          
          />
          <input
            type="range"
            min="0"
            max={priceRange[1]}
            step="10"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="range range-primary" 
          />
        </div>
        {/* Max Range  */}
        <div className=" flex text-center items-center space-x-4">
          <input
            type="number"
            min={priceRange[0]}
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="w-15 p-0.5 text-sm text-center border-2 border-[#C6D870] rounded-md focus:outline-none focus:border-[#C6D870] focus:ring-2 focus:ring-[#C6D870]/50"
          />
          <input
            type="range"
            min={priceRange[0]}
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="range range-primary"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className=" p-2 rounded-lg shadow">
        <p className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </p>
        <select
          className="w-full text-sm p-1 border-2 border-[#C6D870] rounded-md focus:outline-none focus:border-[#C6D870] focus:ring-2 focus:ring-[#C6D870]/50"
          value={selectedCategory}
          onChange={(e) => {
            handleCategoryChange(e.target.value);
            handleClose();
          }}
        >
          <option value="" className="bg-[#EFF5D2] text-sm">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} className="bg-[#EFF5D2] text-sm" value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className="flex flex-col justify-center items-center text-sm p-2 rounded-lg shadow">
        <div className="w-full">
            <p className="block text-left text-sm font-medium text-gray-700 mb-2">
            Search
          </p>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="w-full text-sm p-1 border-2 border-[#C6D870] rounded-md focus:outline-none focus:border-[#C6D870] focus:ring-2 focus:ring-[#C6D870]/50"
        />
        <button 
          onClick={()=>{
            handleSearchQuery(search);
            handleClose();
          }}
          className="bg-[#8FA31E] rounded-md text-white px-3 py-1.5 mt-1">Search</button>
      </div>

      {/* Sorting  */}
      <div className="text-sm p-2 rounded-lg shadow">
        <p className="block text-sm font-medium text-gray-700 mb-2">
          Sort By Price/Most-Recent
        </p>
        <select
          className="w-full text-sm p-1 border-2 border-[#C6D870] rounded-md focus:outline-none focus:border-[#C6D870] focus:ring-2 focus:ring-[#C6D870]/50"
          value={sortOrder}
          onChange={(e) => {
            handleSorting(e.target.value);
            handleClose();
          }}
        >
          <option className="bg-[#EFF5D2]" value="">Default</option>
          <option className="bg-[#EFF5D2]" value="price">Price: Low to High</option>
          <option className="bg-[#EFF5D2]" value="-price">Price: High to Low</option>
          <option className="bg-[#EFF5D2]" value="-updated_at">Most-Recent</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;