import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from '../Context/CartContext';
import ProductDetailImg from '../ProductExpoDetail/ProductDetailImg';
import CartTotal from './CartTotal';
import {Link} from 'react-router-dom';



const CartView = () => {
    const {cart, removeFromCart} = useContext(CartContext);
    return (
        <>
            {cart?.map((element) => (
              <tr>
                <td><ProductDetailImg name = {element.item.tipo} index={element.item.codigo}/></td>
                <th scope="row">{element.item.marca}</th>
                <td>{element.item.tipo}</td>
                <td>${element.item.precio}</td>
                <td>{element.quantity}gr</td>
                <td>${Math.round((element.quantity/100) * element.item.precio * 100) / 100}</td>
                <td><button type="button" className="btn btn-danger" onClick = {() => removeFromCart(element.item.codigo)}>🗑️</button></td>
              </tr>  
            ))}
            <CartTotal/>
        </>
    )
}

export default CartView;
