import React from 'react';
import CartView from './CartView';
import './Cart.css'

const Cart = () => {
    return (
        <>
            <table className="table table-hover">
            <thead>
                  <tr className="table-primary">
                    <th scope="col"></th>
                    <th scope="col">MARCA</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">PRECIO x100gr</th>
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">SUBTOTAL</th>
                    <th scope="col"></th>
                  </tr>
            </thead>
            <tbody>
                <CartView/>
            </tbody>
            </table>
        </>
    );
}

export default Cart;
