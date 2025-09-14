const ShopTopSection = () => {
    return (
        <div
              className="relative bg-cover bg-center h-[400px]"
              style={{ backgroundImage: `url(https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861848/shoptopbg_p9uz3v.jpg)` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="flex flex-col items-center text-center mt-0 sm:mt-0">
                  <p className="montserrat-700 tracking-tighter text-white pb-5 text-7xl">
                    Shop
                  </p>

                </div>
              </div>
            </div>
    );
};

export default ShopTopSection;