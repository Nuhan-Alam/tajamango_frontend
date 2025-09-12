import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import useAuthContext from '../hooks/useAuthContext';
import Loading from '../components/loading';
import { useEffect, useState } from 'react';
import useCartContext from '../hooks/useCartContext';

const MainLayout = () => {
    const {loading} = useAuthContext();
    const {cart} = useCartContext(); // Get cart from context
    const [localCart, setLocalCart] = useState(cart); // Initialize with cart data

    // Update localCart when cart changes
    useEffect(() => {
        if (cart) setLocalCart(cart);
    }, [cart]);

    

    return (
        <>
        {loading?(
            <Loading/>
        ):(
            <>
            <NavBar localCart={localCart} setLocalCart={setLocalCart}/>
            <Outlet context={{ localCart, setLocalCart }}/>
            <Footer/>
            </>
        )}
            
        </>
    );
};

export default MainLayout;