import { useState } from "react";

import OrderTable from "./OrderTable";
import useAuthContext from "../../../hooks/useAuthContext";
import authApiClient from "../../../services/auth-api-client";
import CustomSelect from "./CustomSelect";
import useOrderContext from "../../../hooks/useOrderContext";


const OrderCard = ({ order,setOrders}) => {
  const { user } = useAuthContext();
  const [status, setStatus] = useState(order.status);
  const [cancelLoading,setCancelLoading] = useState(false);
  const [adminLoading,setAdminLoading] = useState(false);
  const {getUserOrders} =useOrderContext();

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setAdminLoading(true);
    try {
      const response = await authApiClient.patch(
        `/orders/${order.id}/update_status/`,
        { status: newStatus }
      );
      console.log(response);
      if (response.status === 200) {
        setStatus(newStatus);
        if(newStatus==="Delivered" || newStatus==="Canceled"){
          await getUserOrders();
        }
      }
    } catch (error) {
      console.log(error);
    }finally{
      setAdminLoading(false);
    }
  };


    const handleCancelOrder = async (orderId) => {
    setCancelLoading(true);
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
    }finally{
      setCancelLoading(false);
      getUserOrders();
    }
  };


  const options = ["Pending", "Ready To Ship", "Shipped", "Delivered", "Canceled"];

  return (
    <div className="bg-[#C6D870]/20  flex flex-col  rounded-lg shadow-lg mb-8 overflow-hidden">
      {adminLoading?(<div className="flex justify-center items-center p-8">
        <span className="loading loading-dots w-20 h-20 text-[#8FA31E]"></span>
      </div>):(<>
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Order #{order.id}</h2>
          <p className="text-gray-600 text-sm">Placed on {order.created_at}</p>
        </div>
        <div className="flex gap-2">
          {user.is_staff ? (
            <CustomSelect
  value={status}
  onChange={handleStatusChange}
  options={options}
  className="px-3 py-1 rounded-full text-sm font-medium bg-[#C6D870] text-white"
/>
          ) : (
            <span
              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                order.status === "Canceled" ? "bg-red-300" :"bg-[#C6D870]"
              }`}
            >
              {order.status}
            </span>
          )}
          {order.status !== "Deliverd" &&
            order.status !== "Canceled" &&
            !user.is_staff && (
              <button
                onClick={() => handleCancelOrder(order.id)}
                className="text-blue-700 hover:underline"
                disabled={cancelLoading}
              >
                {cancelLoading?'Canceling...':'Cancel'}
              </button>
            )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-medium text-lg mb-4">Order Items</h3>
        {/* Order Items Table  */}
        <OrderTable items={order.items} />
      </div>
      <div className="border-t p-6 flex flex-col items-end">
        <div className="space-y-2 w-full max-w-[200px]">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
          <div className="flex flex-col justify-between  border-t pt-2">
            <p>Payment Method:</p> 
            <p className="font-bold">{order.payment_method}</p>
          </div>
        </div>
        {/* {!user.is_staff && order.status === "Pending" && (
          <button
            className="mt-4 px-4 py-2 bg-[#8FA31E] hover:bg-[#556B2F] text-white rounded-lg transition-colors"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        )} */}
      </div>
      </>)}
      
    </div>
  );
};

export default OrderCard;