import loadingbg from "../assets/images/loading.JPG";
const Loading = () => {
    return (
        <div
              className="relative bg-cover bg-center h-[630px]"
              style={{ backgroundImage: `url(${loadingbg})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
               <span className="loading loading-dots w-28 h-28 text-accent"></span>
              </div>
            
        </div>
    );
};

export default Loading;