import React from 'react';
import ProductList from '../components/ProductList';

const Pleasure = () => {
    return (
        <div className="product-items">
        <div className="product-list">
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
        </div>
    </div>
    );
};

export default Pleasure;