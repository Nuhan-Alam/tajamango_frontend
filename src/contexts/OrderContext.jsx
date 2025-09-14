import { createContext, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);
    const [orderLoading,setOrderLoading] = useState(false);
    // const {user} = useAuthContext();

    const getUserOrders = async () => {
    setOrderLoading(true);
    try {
        const response = await authApiClient.get("/orders/");
        
        const normalized = response.data.map(order => ({
            ...order,
            total_price: Number(order.total_price)
        }));
        
        setOrders(normalized);
        console.log(response.data);
        return response;
        
    } catch (error) {
        setOrders([]); 
        console.log(error);
    } finally {
        setOrderLoading(false);
    }
};

    useEffect(() => {
        getUserOrders();
      }, []);

    const allvalue = {
        orders,
        getUserOrders,
        orderLoading
    }
   return (
    <OrderContext.Provider value={allvalue}>{children}</OrderContext.Provider>
);
};

export default OrderContext;