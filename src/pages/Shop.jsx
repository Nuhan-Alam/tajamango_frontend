import React from 'react';
import NavBg from '../components/Shop/NavBg';
import ShopTopSection from '../components/Shop/ShopTopSection';
import Product from '../components/Products/Product';
import ProductSection from '../components/Shop/ProductSection';

const Shop = () => {
    return (
        <div>
            <NavBg/>
            <ShopTopSection/>
            <ProductSection/>
        </div>
    );
};

export default Shop;