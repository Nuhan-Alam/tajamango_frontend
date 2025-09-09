import { Link } from 'react-router';
const LoginBarSm = () => {
    return (
        <div>
         <li>
                <Link
                  to="/login"
                  className="hover:text-[#8FA31E] flex items-center justify-center"
                >
                  Login
                </Link>{" "}
              </li>
        </div>
    );
};

export default LoginBarSm;