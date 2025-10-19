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
    <div className="fixed top-0 left-0 z-20">
      {hide && (
        <button
          className="bg-[#8FA31E] mt-20 p-1 rounded-r-sm"
          onClick={() => setHide(!hide)}
        >
          <div className="flex justify-center items-center gap-1">
            <p className=" text-white montserrat-500">Filter</p>
            <CiSearch className="text-white" />
          </div>
        </button>
      )}
      {!hide && (
        <div  className="fixed top-0 left-0 z-40 h-full w-full pr-16 " onClick={() => setHide(true)}>
            <div className="h-full bg-[#EFF5D2]/95" onClick={(e) => e.stopPropagation()}>
                <button
            className="absolute top-2 right-16"
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
