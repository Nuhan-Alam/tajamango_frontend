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

  // Crate a new cart
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/carts/");
      const currentCartId = localStorage.getItem("cartId");
      if (!currentCartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
    //   console.log(response);
      setCart(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add items to the cart
  const AddCartItems = useCallback(
    async (product_id, quantity) => {
      setLoading(true);
      if (!cartId) await createOrGetCart();
      try {
        const response = await authApiClient.post(`/carts/${cartId}/items/`, {
          product_id,
          quantity,
        });
        return response.data;
      } catch (error) {
        console.log("Error adding Items", error);
      } finally {
        setLoading(false);
      }
    },
    [cartId, createOrGetCart]
  );

  // Update Item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
          quantity,
        });
      } catch (error) {
        console.log("Error updating cart items", error);
      }
    },
    [cartId]
  );

  // Delete Cart Items
  const deleteCartItems = useCallback(
    async (itemId) => {
      try {
        await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
      } catch (error) {
        console.log(error);
      }
    },
    [cartId]
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