import React, { useState } from "react";
import useOrderContext from "../../hooks/useOrderContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import authApiClient from "../../services/auth-api-client";
import useCartContext from "../../hooks/useCartContext";

const Orderdetails = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState(null);
  const { getUserOrders } = useOrderContext();
  const { cartId } = useParams();
  const [successMsg, setSuccessMsg] = useState("");
  const {createOrGetCart} = useCartContext();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await authApiClient.get(`/carts/${cartId}/`);
    const cart = response.data;
    console.log("Data from ordertails:", data);
    console.log("cart price:", cart);
    console.log("Item length:", cart.items?.length);
    console.log(paymentMethod);
    if (paymentMethod === "cod") {
      try {
        const order = await authApiClient.post("/orders/", { cart_id: cartId });
        console.log("Order stuatusa: ",order.status)
        if (order.status === 201) {
            await getUserOrders();
            setLoading(false);
            localStorage.removeItem("cartId");
            createOrGetCart();
            navigate("/dashboard/orders/");
            // window.location.href = '/dashboard/orders';
            return; 
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    if (paymentMethod === "online") {
      try {
        const response = await authApiClient.post("/payment/initiate/", {
          amount: cart.total_price,
          orderId: cartId,
          numItems: cart.items?.length,
          shippingAddress: data.address,
          phoneNum: data.phone_number,
          nserName: data.first_name,
          forntEndDomain: `http://localhost:5173/dashboard/orders`,
        });
        if (response.data.payment_url) {
          localStorage.removeItem("cartId");
          createOrGetCart();
          setLoading(false);
          window.location.href = response.data.payment_url;
        } else {
          alert("Payment failed");
        }
      } catch (error) {
        console.log("Full error:", error);
        console.log("Error response:", error.response?.data); 
        console.log("Error status:", error.response?.status);
      }
    }
    
  };

  //   const createOrder = async () => {

  //   };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="card w-full max-w-md bg-[#EFF5D2]/80 shadow-xl">
          <div className="card-body">
            {/* {errorMsg && <ErrorAlert error={errorMsg} />} */}
            {successMsg && (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{successMsg}</span>
              </div>
            )}

            <h2 className=" text-2xl font-bold text-center">Order Details</h2>
            <p className="text-base-content/70 text-center">
              Provide proper information for placing Order
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="form-control">
                <label className="label" htmlFor="Name">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  id="Full Name"
                  type="text"
                  placeholder="..."
                  className="input input-bordered w-full"
                  {...register("first_name", {
                    required: "First Name is Required",
                  })}
                />
                {errors.first_name && (
                  <span className="label-text-alt text-error">
                    {errors.first_name.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label" htmlFor="address">
                  <span className="label-text">Address</span>
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="..."
                  className="input input-bordered w-full"
                  {...register("address", {
                    required: "Address is Required",
                  })}
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="phone_number">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  id="phone_number"
                  type="text"
                  placeholder="..."
                  className="input input-bordered w-full"
                  {...register("phone_number", {
                    required: "Phone Number is Required",
                  })}
                />
              </div>

              <div className="flex items-center justify-center">
                <fieldset className="fieldset rounded-box w-64 p-4 flex flex-col items-center text-center justify-center">
                  <legend className="fieldset-legend text-xl">
                    Payment Method
                  </legend>
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
              </div>

              <button
                type="submit"
                className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white w-full"
              >
                {loading ? <p>Processing...</p> : <p>Confirm Order</p>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderdetails;
