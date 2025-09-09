import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../../hooks/useAuthContext';
import ErrorAlert from '../../components/ErrorAlert';

const ResendEmail = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   const navigate = useNavigate();

  const { errorMsg, resendActivation } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
        const apiResponse = await resendActivation(data); 
        setResponse(apiResponse);
    } catch (error) {
      console.log("Login Failed", error);
      errorMsg
    } finally {
      setLoading(false);
    }
  };

    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md bg-[#EFF5D2]/80 shadow-xl">
        <div className="card-body">
          {errorMsg && <ErrorAlert error={errorMsg} />}
          {response?.success && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{response.message}</span>
            </div>
          )}
          <h2 className="card-title text-2xl font-bold">Verification Email</h2>
          <p className="text-base-content/70">
            Enter your email to resent verification link
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

            <button
              type="submit"
              className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Email"}
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default ResendEmail;