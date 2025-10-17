import { FaRegTrashAlt } from "react-icons/fa";

const CartItemList = ({ items, handleUpdateQuantity, handleRemoveItem }) => {
  if (items?.length === 0) {
    return (
      <div className="py-6 text-center text-gray-500">Your cart is empty</div>
    );
  }

  return (
    <div className="space-y-4 border-2 border-black py-5 rounded-md">
      <h2 className="text-xl font-semibold text-center pb-5 border-b-2">Shopping Cart</h2>
      <div className="overflow-x-auto">
        <table className="table w-full flex flex-col items-center justify-center text-center ">
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-right">Price</th>
              <th>Quantity</th>
              <th className="text-right">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="font-medium">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img
                        src={
                          item.product.images?.length > 0 ? `https://res.cloudinary.com/dbgsrmvgi/${item.product.images[0].image}` : "https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861847/default_product_hbqip5.png"
                        }
                        alt="Product_Image"
                        className="rounded-xl aspect-square h-15 md:h-25"
                      />
                    {item.product.name}
                  </div>
                  </td>
                <td className="text-right">${Number(item.product.price).toFixed(2)}</td>
                <td>
                  <div className="flex items-center join">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="btn btn-xs btn-outline join-item"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(item.id, e.target.value)
                      }
                      className="input input-xs bg-[#C6D870]/50  input-bordered join-item w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="btn btn-xs btn-outline join-item"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-right font-medium">{Number(item.total_price).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs btn-circle"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FaRegTrashAlt className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItemList;