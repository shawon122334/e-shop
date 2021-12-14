import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //reduce is used to addition of elements of some objects inside array
    // const total = cart.reduce ((total,prd)=> total+prd.price,0)
    let total =0;
    for(let i=0;i<cart.length;i++){
        const product= cart[i];
        total = Math.round(total + product.price);
    }
    let shipping = 0;
    if (total > 50){
        shipping =0;
    }
    else if (total < 20){
        shipping = 5;
    }
    const tax = (total /10).toFixed(2);
    // const formatNumber  =(num)=>{
    //     const number = num.toFixed(2)
    //     return Number(number)
    // }
    
    return (
        <div>
            <h4>Order Summary </h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Shipping Cost : {shipping} </p>
            <p>Tax + VAT : {tax}</p>
            <p>Total Price : {total+shipping + Number(tax)}</p>

        </div>
    );
};

export default Cart;