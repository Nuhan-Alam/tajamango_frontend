import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const ProductImageGallery = ({ images, ProductName }) => {
  const [thumbsSwiper] = useState(null);
  let displayImages = [{ image: "https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861847/default_product_hbqip5.png" }]
  const isImage = images.length > 0 ? true: false;
  if(isImage){ displayImages =  images};
 
  return (
    <div className="rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="product-main-slider"
      >
        {displayImages.map((imageObj, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-square bg-base-100">
              <img
                src={isImage?`https://res.cloudinary.com/dbgsrmvgi/${imageObj.image}`:"https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861847/default_product_hbqip5.png"}
                alt={ProductName}
                className="rounded-2xl object-contain aspect-square"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallery;