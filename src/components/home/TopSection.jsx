import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861848/home_top_bg_br6eug.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center text-center mt-0 sm:mt-0">
          <p className="montserrat-400 tracking-widest text-white pb-5 text-sm sm:text-base">
            WELCOME TO TAJAMANGO.COM
          </p>
          <p className="montserrat-500 leading-tight text-white text-3xl sm:text-6xl px-4 sm:px-56 mt-4 sm:mt-0">
            Mangoes from all over the world at your fingertips
          </p>
          <Link
            to="/shop"
            className="montserrat-400 bg-[#8FA31E] hover:bg-[#556B2F] p-3 px-6 mt-10 text-white text-lg rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
