import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Button from 'react-bootstrap/Button';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>Seller Name : {seller}</small></p>
                <p>${price}</p>

                <p><small>Stock Limited.Only {stock} left</small></p>
                
                {/* <button className="cart-button" onClick={()=>props.cartButton(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button> */}
                
                {/* bootstrap button */}
                <Button variant="success" onClick={()=>props.cartButton(props.product)} > <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</Button>{' '}

                
                {/* passing this.product to the event handler */}
            </div>
        </div>
    );
};

export default Product;