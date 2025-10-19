import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProduct from "../../hooks/useFetchProducts";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";
import FAB_Filter from "./FAB_Filter";

const ProductSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelecetedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  // const [showFilters, setShowFilters] = useState(false);

  const { products, loading, totalPages, totalresult } = useFetchProduct(
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder
  );

  const {categories} = useFetchCategories();

  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

  return (
    <div>
        <p className="text-center text-2xl font-semibold pt-2">Total Results {totalresult}</p>
         <div className="flex flex-col md:flex-row max-w-7xl justify-center gap-3 mx-auto px-3 md:px-0 pb-4">
      
      {/* <div className="flex items-center justify-center mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-[#8FA31E] hover:bg-[#556B2F] text-white rounded-lg transition-colors"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>   */}
      <div className="md:hidden">
        <FAB_Filter
        priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={setSelecetedCategory}
          searchQuery={searchQuery}
          handleSearchQuery={setSearchQuery}
          sortOrder={sortOrder}
          handleSorting={setSortOrder}
        />
      </div>
        <div className="my-8 mx-2 hidden md:block">
          <FilterSection
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={setSelecetedCategory}
          searchQuery={searchQuery}
          handleSearchQuery={setSearchQuery}
          sortOrder={sortOrder}
          handleSorting={setSortOrder}
        />
        </div>
        
     <div className="w-auto md:w-[1000px]">
        <ProductList products={products} loading={loading} />
        <div className="py-2">
            <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
        </div>
      
      </div>
      
    </div>
      </div>
   
  );
};

export default ProductSection;