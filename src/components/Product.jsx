import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product-box">
            <img src="./img/products/prod1.jpg" alt="Product" />
            <p><Link to='/product'>Solimo Coffee Beans 2 kg</Link></p>
            <p>10.73$</p>
        </div>
    );
};

export default Product;