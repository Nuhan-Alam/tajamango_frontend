import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import useAuthContext from '../hooks/useAuthContext';

const MainLayout = () => {
    const { user,loading} = useAuthContext();
    return (
        <>
        {loading?(
            <p>Loading........</p>
        ):(
            <>
            <NavBar/>
            <Outlet/>
            <Footer/>
            </>
        )}
            
        </>
    );
};

export default MainLayout;