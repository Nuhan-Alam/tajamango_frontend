import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";
import OrderCard from "../../components/Dashboard/Order/OrderCard";


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    authApiClient.get("/orders/")
    .then((res) => {
      const normalized = res.data.map(order => ({
        ...order,
        total_price: Number(order.total_price)
      }));
      setOrders(normalized);
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
    });
}, []);
console.log("From Orders.jsx:",orders)


  const handleCancelOrder = async (orderId) => {
    try {
      const response = await authApiClient.post(`/orders/${orderId}/cancel/`);
      console.log(response);
      if (response.status === 200) {
        setOrders((prevOrder) =>
          prevOrder.map((order) =>
            order.id === orderId ? { ...order, status: "Canceled" } : order
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} onCancel={handleCancelOrder} />
      ))}
    </div>
  );
};

export default Orders;