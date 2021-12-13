import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>Seller Name : {seller}</small></p>
                <p>${price}</p>

                <p><small>Stock Limited.Only {stock} left</small></p>
            </div>
        </div>
    );
};

export default Product;