import React from 'react';
import Button from 'react-bootstrap/Button';

const ReviewItems = (props) => {
    // console.log(props);
    const {name,quantity,key} = props.product;
    const reviewItemStyle ={
        borderBottom : '1px solid lightgray',
        marginBottom : '5px',
        paddingBottom : '5px',
        marginLeft : '50px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4 style={{color: 'blue'}}>{name}</h4>
            <p>Quantity : {quantity}</p>
            <br />
            <Button variant="success" onClick={()=>props.handleRemoveButton(key)}>Remove</Button>
        </div>
    );
};

export default ReviewItems;