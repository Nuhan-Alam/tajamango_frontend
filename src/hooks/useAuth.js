import { useCallback, useEffect, useState } from "react";
import apiClient from "../services/api-client";


const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());


  // Fetch user Profile
  const fetchUserProfile = useCallback(async () => {
    if (!authTokens?.access) return;
    setLoading(true);
    try {
      const response = await apiClient.get("/auth/users/me", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("Error Fetching user", error);
    }finally {
      setLoading(false);
    }
  },[authTokens]);


   // Auto-fetch user when tokens change - KEEP THIS!
  useEffect(() => {
    if (authTokens?.access) {
      fetchUserProfile();
    } else {
      console.log('Clearing user - no access token');
      setUser(null);
    }
  }, [authTokens, fetchUserProfile]);

  // Login User
  const loginUser = async (userData) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      // After login set user
      await fetchUserProfile();
    } catch (error) {
      setErrorMsg(error.response.data?.detail);
    }finally {
      setLoading(false);
    }
  };

  // Register User
  const registerUser = async (userData) => {
    setLoading(true);
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);
      return {
        success: true,
        message:
          "Registration successfull. Check your email to activate your account.",
      };
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data)
          .flat()
          .join("\n");
        setErrorMsg(errorMessage);
        return { success: false, message: errorMessage };
      }
      setErrorMsg("Registratation failed. Please try again");
      return {
        success: false,
        message: "Registratation failed. Please try again",
      };
    }finally {
      setLoading(false);
    }
  };

  // Resent Activation
  const resendActivation = async (userData) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/users/resend_activation/", userData);
      return {
        response: response,
        success: true,
        message:
          "Another email is sent please check your Mail Box",
      };
    } catch (error) {
      setErrorMsg(error);
    }finally {
      setLoading(false);
    }
  };

  // Forgot Password
  const forgotPassowrd = async (userData) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/users/reset_password/", userData);
      return {
        response: response,
        success: true,
        message:
          "Check you mail box an Email has been sent",
      };
    } catch (error) {
      setErrorMsg(error);
    }finally {
      setLoading(false);
    }
  };

  // Confirm New Password
  const confirmNewPassword = async (Data) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/users/reset_password_confirm/", Data);
      return {
        response: response,
        success: true,
        message:"Your password has been reset",
      };
    } catch (error) {
      setErrorMsg(error);
    } finally {
      setLoading(false);
    }
  };

  // Logout User
  const logoutUser = () => {
    setLoading(true);
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    setLoading(false);
  };

  return { user, errorMsg, loading, loginUser, registerUser, logoutUser , resendActivation,forgotPassowrd,confirmNewPassword};
};

export default useAuth;