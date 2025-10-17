import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import ErrorAlert from "../../components/ErrorAlert";
import useCartContext from "../../hooks/useCartContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { errorMsg, loginUser } = useAuthContext();
  const {createOrGetCart} = useCartContext();
  const [loginLoading, setLoginLoading] = useState(false);


  const onSubmit = async (data) => {
    setLoginLoading(true);
    try {
      await loginUser(data);
      await createOrGetCart();
      navigate("/");
    } catch (error) {
      console.log("Login Failed", error);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md bg-[#EFF5D2]/80 shadow-xl">
        <div className="card-body">
          {errorMsg && <ErrorAlert error={errorMsg} />}
          <h2 className="card-title text-2xl font-bold">Sign in</h2>
          <p className="text-base-content/70">
            Enter your email and password to access your account
          </p>

          <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white w-full"
              disabled={loginLoading}
            >
              {loginLoading? "Logging In..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="link text-[#8FA31E] hover:text-[#556B2F]">
                Sign up
              </Link>
            </p>
          </div>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              <Link to="/forgotpassword" className="link text-[#8FA31E] hover:text-[#556B2F]">
                Forgot Password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;