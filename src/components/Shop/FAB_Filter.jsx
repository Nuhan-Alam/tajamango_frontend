import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import FilterSection from "./FilterSection";

const FAB_Filter = ({
  priceRange,
  handlePriceChange,
  categories,
  selectedCategory,
  handleCategoryChange,
  searchQuery,
  handleSearchQuery,
  sortOrder,
  handleSorting,
}) => {
  const [hide, setHide] = useState(true);

  return (
    <div className="fixed top-0 left-0 z-20 pointer-events-none">
      {hide && (
        <button
          className="bg-[#8FA31E] mt-20 p-1 rounded-r-sm pointer-events-auto"
          onClick={() => setHide(!hide)}
        >
          <div className="flex justify-center items-center gap-1">
            <p className=" text-white montserrat-500">Filter</p>
            <CiSearch className="text-white" />
          </div>
        </button>
      )}
      {!hide && (
        <div  className="fixed top-0 left-0 z-40 h-full w-full pr-16 pointer-events-auto" onClick={() => setHide(true)}>
            <div className="relative top-10 rounded-r-2xl bg-[#EFF5D2]" style={{ 
    animation: 'slideIn 0.3s ease-out forwards' 
  }} onClick={(e) => e.stopPropagation()}>
                <button
            className="absolute top-2 right-1"
            onClick={() => setHide(!hide)}
          >
            <IoClose className="text-black w-10 h-10" />
          </button>
          <FilterSection
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            handleSearchQuery={handleSearchQuery}
            sortOrder={sortOrder}
            handleSorting={handleSorting}
          />
            </div>
          
        </div>
      )}
    </div>
  );
};

export default FAB_Filter;
