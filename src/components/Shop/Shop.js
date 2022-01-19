import React, { useState } from 'react';
import fakedata from '../../fakeData';
import { addToDatabaseCart, addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first40 = fakedata.slice(0,40)
    const [products,setProducts] = useState(first40)
    const [cart,setCart] = useState([])

    // console.log(fakedata);
    //event handler for the button should be alongside the state 
    const cartButton =(product)=> {
        const newCart = [...cart,product]
        setCart(newCart)
        const sameProduct = newCart.filter(pd=>pd.key === product.key)
        const count = sameProduct.length;
        addToDatabaseCart(product.key,count)
        // addToDb(product.key)
    }
    //received this.product from button as product

    return (
        <div className="shop-container">
            <div className="product-container">
            
                {
                    products.map(product => <Product key={product.key} showCartButton={true} cartButton={cartButton} product={product}></Product> )
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;