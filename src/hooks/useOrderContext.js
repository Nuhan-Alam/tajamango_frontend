import { useContext } from "react";
import OrderContext from "../contexts/OrderContext";

const useOrderContext = () => {
    return useContext(OrderContext);
};

export default useOrderContext;