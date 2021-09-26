import React from 'react';

import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    console.log(cart)
    let totalQuantity = 0;

    let total = 0;
    for(const prod of cart){
        if(!prod.quantity){
            prod.quantity = 1
        }
        total = total + prod.price * prod.quantity;
        totalQuantity = totalQuantity + prod.quantity
        
    }
    
    
    return (
        
        <div>
                
                <h3>Total Summary</h3>
                <h5>Total Ordered: {totalQuantity}</h5>
                <p>Total: $ {total.toFixed(2)}</p>
                
                <h3>Casts you added: </h3>
                <ul>
                    {
                        cart.map(product => <li>{product.name}</li>)
                    }
                </ul>
        </div>
    );
};

export default Cart;