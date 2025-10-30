const Loading = () => {
    return (
        <div
              className="relative bg-cover bg-center min-h-screen w-full "
              style={{ backgroundImage: `url(https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861847/loading_jpucm3.jpg)` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
               <span className="loading loading-dots w-28 h-28 text-[#8FA31E]"></span>
              </div>
            
        </div>
    );
};

export default Loading;