import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className="product-item">
            <img src="./img/products/prod3.jpg" alt="Product" />
            <p><Link to='/product'>Solimo Coffee Beans 2 kg</Link></p>
            <p>Brazil</p>
            <p>10.73$</p>
        </div>
    );
};

export default ProductList;