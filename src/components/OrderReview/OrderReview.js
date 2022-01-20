import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';

const OrderReview = () => {
    const [cartData,setCartData] = useState([])
    useEffect(()=>{
        //cart data
        //retrieving data from local storage (keys actually)
        const savedCart = getDatabaseCart();
        // console.log(savedCart);

        //gathered all keys from saved cart
        const productKeys= Object.keys(savedCart)
        // console.log(productKeys);

        //mapping through all keys and find the product 
        const cartProducts= productKeys.map(key=>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]; //quantity set
            return product;
        })
        // console.log(cartProducts);
        setCartData(cartProducts)
    },[])

    const handleRemoveButton=(productKey)=>{
        // console.log('handle remove button clicked');
        //filtered all product keys without the key we would remove
        const newCartData= cartData.filter(data=> data.key!== productKey)
        setCartData(newCartData);
        removeFromDatabaseCart(productKey)
    }
    return (
        <div>
            <h3>Cart Items : {cartData.length}</h3>
            {
                cartData.map(pd=> <ReviewItems handleRemoveButton={handleRemoveButton} key={pd.key} product={pd}></ReviewItems> )
            }
        </div>
    );
};

export default OrderReview;