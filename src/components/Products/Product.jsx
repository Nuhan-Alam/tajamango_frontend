import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import apiClient from "../../services/api-client";
import ErrorAlert from "../ErrorAlert";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products/")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="py-12 px-4 pl-9 md:pl-0 max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 md:px-8 mb-4">
          <h2 className="text-2xl md:text-4xl font-bold">Trending Products</h2>
          <Link
                      to="/shop"
                      className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white px-6 py-6 rounded-full text-lg"
                    >
                    View All
            </Link>
        </div>
        {/* Spinner  */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-dots w-28 h-28 text-[#8FA31E]"></span>
          </div>
        )}

        {error && <ErrorAlert error={error} />}
        {/* Product Slider  */}
        {!isLoading && !error && products.length > 0 && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            className="mt-4 px-4 container"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="flex justify-center ">
                <ProductItem key={product.id} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {!isLoading && !error && products.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No Products Available
          </p>
        )}
      </div>
    </section>
  );
};

export default Product;