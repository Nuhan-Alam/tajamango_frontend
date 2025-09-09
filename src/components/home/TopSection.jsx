import home_top_bg from "../../assets/images/home_top_bg.jpg";

const TopSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[630px]"
      style={{ backgroundImage: `url(${home_top_bg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center text-center mt-0 sm:mt-0">
          <p className="montserrat-400 tracking-widest text-white pb-5 text-sm sm:text-base">
            WELCOME TO TAJAMANGO.COM
          </p>
          <p className="montserrat-500 leading-tight text-white text-3xl sm:text-6xl px-4 sm:px-56 mt-4 sm:mt-0">
            Mangoes from all over the world at your fingertips
          </p>
          <button className="montserrat-400 bg-[#8FA31E] hover:bg-[#556B2F] p-3 px-6 mt-10 text-white rounded-full">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
