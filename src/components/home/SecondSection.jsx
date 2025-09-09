import { CreditCard, Truck, Package, Heart } from "lucide-react";
const SecondSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Secure Payment */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#EFF5D2] p-4 rounded-full flex items-center justify-center">
          <CreditCard className="w-8 h-8 text-black" />
        </div>
        <h5 className="mt-4 text-lg font-semibold">Secure Payment</h5>
        <p className="text-gray-500">Totally sucure and trusted payment</p>
      </div>

      {/* Free Shipping */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#EFF5D2] p-4 rounded-full flex items-center justify-center">
          <Truck className="w-8 h-8 text-black" />
        </div>
        <h5 className="mt-4 text-lg font-semibold">Free Shipping</h5>
        <p className="text-gray-500">For $300 order</p>
      </div>

      {/* Delivered with Care */}
<div className="flex flex-col items-center text-center">
  <div className="bg-[#EFF5D2] p-4 rounded-full flex items-center justify-center">
    <Package className="w-8 h-8 text-black" />
  </div>
  <h5 className="mt-4 text-lg font-semibold">Delivered with Care</h5>
  <p className="text-gray-500">We make sure that the mangoes reach you in healthy condition</p>
</div>

      {/* Excellent Service */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#EFF5D2] p-4 rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-black" />
        </div>
        <h5 className="mt-4 text-lg font-semibold">Excellent Service</h5>
        <p className="text-gray-500">Your satisfaction is our priority</p>
      </div>
    </div>
    );
};

export default SecondSection;