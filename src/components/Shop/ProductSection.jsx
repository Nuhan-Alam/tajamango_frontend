import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProduct from "../../hooks/useFetchProducts";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ProductSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelecetedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  // const [showFilters, setShowFilters] = useState(false);

  const { products, loading, totalPages } = useFetchProduct(
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
    <div className="flex flex-col md:flex-row max-w-7xl justify-center gap-3 mx-auto px-4 py-8">

      {/* <div className="flex items-center justify-center mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-[#8FA31E] hover:bg-[#556B2F] text-white rounded-lg transition-colors"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>   */}
     
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
     <div className="w-auto md:w-[1000px]">
        <ProductList products={products} loading={loading} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
      </div>
      
    </div>
  );
};

export default ProductSection;