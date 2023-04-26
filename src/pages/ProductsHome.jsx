import React from 'react';

import Product from '../components/Product';

const ProductsPage = () => {
    return (
    <div className="main-product">
        <h3>Our best</h3>
        <div className="product-list">
            <Product />
            <Product />
            <Product />
        </div>
    </div>
    );
};

export default ProductsPage;