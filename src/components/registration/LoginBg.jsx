import { Outlet } from "react-router-dom";
import home_top_bg from "../../assets/images/loginbg.JPG";
const LoginBg = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${home_top_bg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 w-full flex justify-center pt-20 pb-5">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginBg;
