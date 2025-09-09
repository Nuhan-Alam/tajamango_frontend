import { Link } from 'react-router-dom';

const LoginBar = () => {
    return (
        <div>
            <li className='flex items-center'>
              <Link
                to="/login"
                className="text-white hover:text-[#8FA31E] lg:text-lg"
              >
                Login
              </Link>
            </li>
        </div>
    );
};

export default LoginBar;