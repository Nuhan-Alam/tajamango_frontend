import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import useAuthContext from '../hooks/useAuthContext';
import Loading from '../components/loading';

const MainLayout = () => {
    const { user,loading} = useAuthContext();
    return (
        <>
        {loading?(
            <Loading/>
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