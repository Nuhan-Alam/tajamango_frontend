import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import useAuthContext from '../hooks/useAuthContext';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import useCartContext from '../hooks/useCartContext';
import apiClient from '../services/api-client';

const MainLayout = () => {
    const {loading} = useAuthContext();
    const {cart} = useCartContext(); // Get cart from context
    const [localCart, setLocalCart] = useState(cart); // Initialize with cart data
    const [statloading, setStatLoading] = useState(false);
    const [stats, setStats] = useState(null);
    useEffect(() => {
        setStatLoading(true);
        const fetchStats = async () => {
        try {
            const res = await apiClient.get("/stats");
            setStats(res.data);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        } finally {
            setStatLoading(false);
        }
        };
        fetchStats();
    }, []);

    // Update localCart when cart changes
    useEffect(() => {
        if (cart) setLocalCart(cart);
    }, [cart]);

    

    return (
        <>
        {loading||statloading?(
            <Loading/>
        ):(
            <>
            <NavBar localCart={localCart} setLocalCart={setLocalCart}/>
            <Outlet context={{ localCart, setLocalCart, stats }}/>
            <Footer/>
            </>
        )}
            
        </>
    );
};

export default MainLayout;