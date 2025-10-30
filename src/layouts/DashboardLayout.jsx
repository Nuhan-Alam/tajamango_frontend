import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import NavBg from "../components/Shop/NavBg";
import useOrderContext from "../hooks/useOrderContext";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { localCart, setLocalCart } = useOutletContext();
  const {orders,orderLoading,getUserOrders}=useOrderContext();
  useEffect(() => {
    getUserOrders();
  }, []); 
  const currentOrders = orders?.filter(
  (order) => order.status !== "Canceled" && order.status !== "Delivered"
);

  const history = orders?.filter(
  (order) => order.status === "Canceled" || order.status === "Delivered"
);
  console.log('History from dashboard:', history);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeDrawer = () => {
  const drawerToggle = document.getElementById('drawer-toggle');
  if (drawerToggle) {
    drawerToggle.click();
  }
};

  return (
    <>
    <NavBg/>
        <div className="drawer lg:drawer-open">
      {/* Mobile drawer checkbox */}
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      {/* Page content */}
      <div className="bg-[#C6D870]/50 drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen} />

        {/* Main content */}
        <main className="py-10 px-2">
          <Outlet context={{ localCart, setLocalCart,currentOrders,history,orders }} />
        </main>
      </div>

      {/* Sidebar */}
      <Sidebar currentOrders={currentOrders} orderLoading={orderLoading} closeDrawer={closeDrawer}/>
    </div>
    </>
    
  );
};

export default DashboardLayout;