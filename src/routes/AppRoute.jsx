import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import ActivateAccount from "../components/registration/ActivateAccount";
import CheckEmailRedirect from "../components/registration/CheckEmailRedirect";
import ResendEmail from "../pages/user/ResendEmail";
import ForgotPassword from "../pages/user/ForgotPassword";
import ConfirmNewPassword from "../pages/user/ConfirmNewPassword";
import LoginBg from "../components/registration/LoginBg";
import Shop from "../pages/Shop";
import Shop_Product from "../pages/Shop-Product";
import About from "../pages/About";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import Cart from "../pages/Dashboard/Cart";
import Orders from "../pages/Dashboard/Orders";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Shop */}
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:productId" element={<Shop_Product />} />

        {/* About */}
        <Route path="about" element={<About />} />

        {/* User */}
        <Route element={<LoginBg />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="checkemail" element={<CheckEmailRedirect />} />
          <Route path="resendemail" element={<ResendEmail />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="activate/:uid/:token" element={<ActivateAccount />} />
          <Route
            path="password/reset/confirm/:uid/:token"
            element={<ConfirmNewPassword />}
          />
        </Route>

        {/* Private Routes  */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          {/* <Route path="payment/success/" element={<PaymentSuccess />} /> */}
          <Route path="products/add" element={<AddProduct />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoute;
