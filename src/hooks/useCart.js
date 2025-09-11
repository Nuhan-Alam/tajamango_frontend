import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  // const [authToken] = useState(
  //   () => JSON.parse(localStorage.getItem("authTokens"))?.access
  // );
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);


  // Error-Cart-Reset
  const handleCartError = useCallback((error, operation) => {
  console.log(`Error in ${operation}:`, error);
  
  if (error.response?.status === 404 || 
      error.response?.status === 401 || 
      error.response?.data?.message?.includes('cart not found')) {
    console.log(`🗑️ Clearing cart due to ${operation} error`);
    localStorage.removeItem("cartId");
    setCartId(null);
    setCart(null);
  }
  // if(error.response?.status === 404){window.location.reload()};
  
  throw error;
}, []);
  

// WARNING!!!!! Response data is different for "GET" and "POST" request Keep that in MIND!!!
  // Crate a new cart
  const createOrGetCart = useCallback(async () => {
    // console.log('Inside creatorGet');
    setLoading(true);
    try {      
      const currentCartId = localStorage.getItem("cartId");
      // console.log("currentcartid before if:",currentCartId);
      if (!currentCartId) {
        // console.log("currentcartid inside if:",currentCartId);
        const response = await authApiClient.post("/carts/");

        console.log("Setting the cart: ", response);
        const data = response.data.cart?(response.data.cart):(response.data);
        localStorage.setItem("cartId", data.id)
        setCartId(data.id);
        setCart(data);
      } else {
      // FETCH existing cart
      const response = await authApiClient.get(`/carts/${currentCartId}/`);
      console.log("Getting the cart: ", response);
      setCartId(currentCartId);
      setCart(response.data);
      }
    } catch (error) {
      handleCartError(error,"Create/Get-Cart");
    } finally {
      setLoading(false);
    }
  }, [handleCartError]);

  // Add items to the cart
  const AddCartItems = useCallback(
    async (product_id, quantity) => {
      setLoading(true);
      if (!cartId) await createOrGetCart();
      try {
        const response = await authApiClient.post(`/products/${product_id}/add_to_cart/`, {
          quantity
        });
        return response.data;
      } catch (error) {
        handleCartError(error,"AddCartItems");
      } finally {
        setLoading(false);
      }
    },
    [cartId, createOrGetCart, handleCartError]
  );

  // Update Item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
          quantity,
        });
      } catch (error) {
        handleCartError(error,"updateCartItemQuantity");
      }
    },
    [cartId, handleCartError] 
  );

  // Delete Cart Items
  const deleteCartItems = useCallback(
    async (itemId) => {
      try {
        const response = await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
        return response;
      } catch (error) {
        handleCartError(error,"deleteCartItems");
      }
    },
    [cartId, handleCartError]
  );


   // Initialize cart only once
  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      createOrGetCart();
    }
  }, [initialized, createOrGetCart]);
  

  return {
    cart,
    loading,
    cartId,
    createOrGetCart,
    AddCartItems,
    updateCartItemQuantity,
    deleteCartItems,
  };
};

export default useCart;