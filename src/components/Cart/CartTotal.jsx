import React, {useContext, useState} from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartTotal = () => {
    const {cart, getTotal, clearCart} = useContext(CartContext);
    return (
        <>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> {cart.length > 0 && (<button type="button" className="btn btn-danger" onClick = {() => clearCart()} >LIMPIAR CARRITO</button>) } </td>
                <th scope="row">TOTAL:</th>
                <td>${getTotal()}</td>
                <td>{cart.length > 0 && (<Link to='/checkout'><button type="button" className="btn btn-success">FINALIZAR COMPRA</button></Link>) }</td>
              </tr>  
        </>
    );
}

export default CartTotal;
