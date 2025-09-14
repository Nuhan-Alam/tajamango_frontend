import { Suspense, useEffect} from "react";
import useCartContext from "../../hooks/useCartContext";
import CartItemList from "../../components/Dashboard/Cart/CartItemList";
import CartSummary from "../../components/Dashboard/Cart/CartSummary";
import { useOutletContext, useParams } from "react-router-dom";
import ErrorAlert from "../../components/ErrorAlert";

const Cart = () => {
  const {
    cart,
    cartId,
    loading,
    createOrGetCart,
    updateCartItemQuantity,
    deleteCartItems,
  } = useCartContext();

  const { status } = useParams();

  // const [localCart, setLocalCart] = useState(cart);
  const { localCart, setLocalCart } = useOutletContext();
  useEffect(() => {
    if (!cart && !loading) createOrGetCart();
  }, [createOrGetCart, cart, loading]);


  if (loading) return <p>Loading...</p>;
  if (!localCart) return <p>No Cart Found</p>;

  const removeCart = () => {
    localStorage.removeItem("cartId");
    setLocalCart(cart);
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; // store a copy of localCart

    setLocalCart((prevLocalCart) => {
      const updatedItmes = prevLocalCart.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              total_price: item.product.price * newQuantity,
            }
          : item
      );

      return {
        ...prevLocalCart,
        items: updatedItmes,
        total_price: updatedItmes.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });

    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy); // Rollback to previous state if API fails
    }
  };

  const handleRemoveItem = async (itemId) => {
    setLocalCart((prevLocalCart) => {
      const updatedItems = prevLocalCart.items.filter(
        (item) => item.id != itemId
      );

      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });

    try {
      await deleteCartItems(itemId);
    } catch (error) {
      console.log(error);
    }
  };
 console.log("local cart fron cart.jsx:",localCart);
  return (
    <div className="container md:mx-auto md:px-4 py-8">
      <div className="flex justify-center items-center">
        {status && <ErrorAlert error={"Payment failed something went wrong!"} />}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Suspense fallback={<p>Loading...</p>}>
            <CartItemList
              items={localCart.items}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          </Suspense>
        </div>
        <div>
          <CartSummary
            totalPrice={localCart.total_price}
            itemCount={localCart.items.length}
            cartId={cartId}
            removeCart={removeCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;