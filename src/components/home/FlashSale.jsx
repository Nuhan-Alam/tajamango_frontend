import { Link } from "react-router-dom";
const FlashSale = () => {
  return (
    <div className="relative bg-cover bg-center h-[350px]"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861849/flashsale_cmy7dl.jpg)` }}>
            <div className="absolute inset-0 bg-black/60">
        <section className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 py-12 text-center h-full">
      {/* Heading */}
      <h2 className="montserrat-700 text-4xl text-white font-bold mb-4">
        Flash Sale: Up to 50% Off On Select Items!
      </h2>

      {/* Text */}
      <p className="montserrat-400 text-sm sm:text-base text-white mb-6">
        Don’t miss out on our flash sale event! For a limited time, enjoy up to 50% off on a selection of our best-selling products.
      </p>

      {/* Button */}
      <Link
                      to="/shop"
className="inline-block bg-transparent border-[#7A9019] border-2 text-white font-medium py-2 px-6 rounded hover:bg-[#7A9019] transition-colors duration-300"                    >
                    Shop Now
            </Link>
    </section>
    </div>
    </div>
  );
};

export default FlashSale;
