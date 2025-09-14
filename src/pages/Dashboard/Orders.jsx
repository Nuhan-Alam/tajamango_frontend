import { useEffect, useState } from "react";
import OrderCard from "../../components/Dashboard/Order/OrderCard";
import { useOutletContext, useParams } from "react-router";
import SuccessAlert from "../../components/SuccessAlert";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const {currentOrders} = useOutletContext();

  useEffect(() => {
    if (currentOrders) {
      setOrders(currentOrders);
    }
  }, [currentOrders]);

console.log("From Orders.jsx:",orders)
const { status } = useParams();


  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Current Orders</h1>
      <div className="flex justify-center items-center">
        {status && <SuccessAlert message={"Payment Successful"} />}
      </div>
      {orders.map((order) => <OrderCard key={order.id} order={order} setOrders={setOrders}/>)}
    </div>
  );
};

export default Orders;