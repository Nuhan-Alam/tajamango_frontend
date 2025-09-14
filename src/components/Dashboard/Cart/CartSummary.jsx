import { useState } from "react";
import authApiClient from "../../../services/auth-api-client";
import { useNavigate } from "react-router-dom";
import useOrderContext from "../../../hooks/useOrderContext";

const CartSummary = ({ totalPrice, itemCount, cartId, removeCart }) => {
  const shipping = itemCount == 0 || parseFloat(totalPrice) > 100 ? 0 : 10;
  const tax = parseFloat(totalPrice) * 0.1;
  const orderTotal = parseFloat(totalPrice) + shipping + tax;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState(null);
  const{getUserOrders} = useOrderContext();

  const createOrder = async () => {
    setLoading(true);
    console.log(paymentMethod);
    if (paymentMethod === "cod") {
      try {
        const order = await authApiClient.post("/orders/", { cart_id: cartId });
        if (order.status === 201) {
          await getUserOrders();
          removeCart();
          navigate("/dashboard/orders/");
        }
      } catch (error) {
        console.log(error);
      } 
    }
    if (paymentMethod === "online") {
      try {
        const response = await authApiClient.post("/payment/initiate/", {
          amount: totalPrice,
          orderId: cartId,
          numItems: itemCount,
          forntEndDomain: `http://localhost:5173/dashboard/orders`,
        });
        if (response.data.payment_url) {
          window.location.href = response.data.payment_url;
        } else {
          alert("Payment failed");
        }
      } catch (error) {
        console.log("Full error:", error);
        console.log("Error response:", error.response?.data); // ✅ This will show the actual error
        console.log("Error status:", error.response?.status);
      }

      getUserOrders();
      setLoading(false);

    }
  };

  return (
    <div className="card bg-base-100 shadow-xl flex flex-col items-center">
      <div className="card-body">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal {itemCount} items</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between font-medium">
              <span>Order Total</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="bg-[#C6D870]/60 rounded-box mt-5"> 
      <fieldset className="fieldset rounded-box w-64 p-4 flex flex-col items-center text-center justify-center">
          <legend className="fieldset-legend text-xl">Payment Method</legend>
          <div className="flex gap-2">
            <label className="label">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                className="radio"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash On Delivery
            </label>
            <label className="label">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                className="radio"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Online Payment
            </label>
          </div>
        </fieldset>
        <div className="card-actions justify-center mt-4 pb-5">
          <div className=" border-2 border-[#556B2F] rounded-md">
            <button
              disabled={itemCount === 0 || !paymentMethod}
              onClick={createOrder}
              className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white w-full"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartSummary;
