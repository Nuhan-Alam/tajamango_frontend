import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EFF5D2] py-8 items-center">
      <div className="mx-auto px-4 md:px-20 flex flex-col md:shadow-sm md:pb-8 md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={"https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861847/tajamangologo_k24bzi.png"}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
          <a href="https://websitedemos.net/generic-ecommerce-02/" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="https://websitedemos.net/generic-ecommerce-02/shop/" className="text-gray-700 hover:text-gray-900">Shop</a>
          <a href="https://websitedemos.net/generic-ecommerce-02/about/" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="https://websitedemos.net/generic-ecommerce-02/contact/" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4 text-gray-700">
          <a href="#" className="hover:text-gray-900"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-gray-900"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-gray-900"><FaYoutube size={20} /></a>
          <a href="#" className="hover:text-gray-900"><FaTwitter size={20} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        Copyright © 2025 TajaMango eCommerce
      </div>
    </footer>
  );
};

export default Footer;
