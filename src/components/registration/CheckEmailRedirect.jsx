import { useNavigate } from "react-router-dom";

const CheckEmailRedirect = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/resendemail");
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div role="alert" className="alert bg-[#EFF5D2]/80">
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
        <span>Please Check Your Mail Box. An email has been sent</span>

        <div>
          <button onClick={onButtonClick} className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white">
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckEmailRedirect;