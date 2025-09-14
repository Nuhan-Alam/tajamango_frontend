import { useOutletContext } from "react-router";
import OrderCard from "../../components/Dashboard/Order/OrderCard";

const History = () => {
  const { history } = useOutletContext();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Order History</h1>
      {history?.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default History;