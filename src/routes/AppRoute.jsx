import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Register from '../pages/user/Register';
import Login from '../pages/user/Login';
import ActivateAccount from '../components/registration/ActivateAccount';
import CheckEmailRedirect from '../components/registration/CheckEmailRedirect';
import ResendEmail from '../pages/user/ResendEmail';
import ForgotPassword from '../pages/user/ForgotPassword';
import ConfirmNewPassword from '../pages/user/ConfirmNewPassword';
import LoginBg from '../components/registration/LoginBg';

const AppRoute = () => {
    return (
        
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>} />

                <Route element={<LoginBg/>}>
                    <Route path="register" element={<Register/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="checkemail" element={<CheckEmailRedirect/>} />
                    <Route path="resendemail" element={<ResendEmail/>} />
                    <Route path="forgotpassword" element={<ForgotPassword/>} />
                    <Route path="activate/:uid/:token" element={<ActivateAccount />} />
                    <Route path="password/reset/confirm/:uid/:token" element={<ConfirmNewPassword />} />
                </Route>
                

            </Route>
        </Routes>
    );
};
export default AppRoute;