import React, { useState } from 'react';
import fakedata from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first40 = fakedata.slice(0,40)
    const [products,setProducts] = useState(first40)

    // console.log(fakedata);
    return (
        <div className="shop-container">
            <div className="product-container">
            
                {
                    products.map(product => <Product product={product}></Product> )
                }

            </div>
            <div className="cart-container">
                <h3>this is cart container</h3>
            </div>
            
        </div>
    );
};

export default Shop;