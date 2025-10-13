import { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useCartContext from "../../hooks/useCartContext";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router";

const AddToCartButton = ({ product, localCart, setLocalCart }) => {
  const {user} = useAuthContext();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { AddCartItems } = useCartContext();
  const navigate = useNavigate()
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = async () => {
    if(!user){
      navigate('/login');
      return null;
    }
    setIsAdding(true);
    const prevLocalCartCopy = localCart; 
    try {
      await AddCartItems(product.id, quantity);
      
        if (prevLocalCartCopy && prevLocalCartCopy) {
    setLocalCart((prevLocalCart) => {
      const existingItemIndex = prevLocalCart.items.findIndex(
        (item) => item.id === product.id
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        // Item exists, update it
        updatedItems = prevLocalCart.items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: quantity,
                total_price: item.product.price * quantity,
              }
            : item
        );
      } else {
        // Item doesn't exist, add it
        const newItem = {
          id: product.id,
          product: product,
          quantity: quantity,
          total_price: product.price * quantity,
        };
        updatedItems = [...prevLocalCart.items, newItem];
      }

      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });
  }

      setIsAdded(true);
      setIsAdding(false);

    } catch (error) {
      console.log(error);
      setIsAdding(false);
      setLocalCart(prevLocalCartCopy); // Rollback to previous state if API fails
    }
  };

  return (
    <div className="space-y-4">
      <div className="join">
        <button
          className="btn btn-outline join-item"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <FaMinus className="h-4 w-4" />
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          min={1}
          max={product.stock}
          className="input input-bordered join-item w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          className="btn btn-outline join-item"
          onClick={increaseQuantity}
          disabled={quantity >= product.stock}
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>
      <button
        className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white w-full"
        onClick={addToCart}
        disabled={isAdding || isAdded || product.stock === 0}
      >
        {isAdding ? (
          <span className="flex items-center">
            <span className="loading loading-spinner loading-sm mr-2"></span>
            Adding...
          </span>
        ) : isAdded ? (
          <span className="flex items-center">
            <FaCheck className="mr-2 h-4 w-4" />
            Added to Cart
          </span>
        ) : (
          <span className="flex items-center">
            <FaShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </span>
        )}
      </button>
    </div>
  );
};

export default AddToCartButton;
