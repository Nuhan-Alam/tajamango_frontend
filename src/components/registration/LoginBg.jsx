import { Outlet } from "react-router-dom";
const LoginBg = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757862549/pexels-messalaciulla-2935021_nx2vqn.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 w-full flex justify-center pt-20 pb-5">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginBg;
