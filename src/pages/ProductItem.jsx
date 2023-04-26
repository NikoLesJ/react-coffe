import React from 'react';

const ProductItem = () => {
    return (
        <div className="content-main">
        <div className="main-img img-product">
            <img src="./img/products/product-item.jpg" alt="" />
        </div>
        <div className="prod-content">
            <h3>About it</h3>
            <div className="head-line">
                <div className="line"></div>
                <img src="./img/group-black.png" alt="Coffee group" />
                <div className="line"></div>
            </div>
            <div className="content-text text-product">
            <p> <b>Country:</b>  Brasil</p>   
            <p> <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Price: <span>16.99$</span> </p>
            </div>
        </div>
        
    </div>
    );
};

export default ProductItem;