import React from 'react';
import { Button } from 'react-bootstrap';


    const Cart = (props) => {
    const cart=props.cart;
    const courseTotal=cart.reduce((sum,course)=>sum+course.price,0);
    const tax=courseTotal/10;
    return (
        <div>
          <h4>Order Summary</h4>
          <p>Total Item order:{cart.length}</p>  
          <p>Price:{courseTotal}</p>
          <p>Tax:{tax}</p>

          <p>Grand Total:{courseTotal+tax}</p>
          <Button variant="success">Place Order</Button>
        </div>
    );
};

export default Cart;