import React from 'react';
import Name from '../Name/Name';
import './Cart.css' ;
const Cart = (props) => {
    const {cart} = props ;
    let total = 0;
    for (const character of cart) {
        total = total + character.salary ;
    }
    return (
        <div>
            <div className="shadow-lg rounded-3 p-4">
                            
                 <h2 className="mb-4"> Your Players</h2>
                  <h5>Player Selected : {props.cart.length} </h5>
                  <br />

                  

                  <h5>Total :{total}</h5>

                    
   
                  
   
                  </div>
        </div>
    );
};

export default Cart;