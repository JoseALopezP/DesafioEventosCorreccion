import {React, useContext, useState} from 'react';
import { CartContext } from './Context/CartContext.js';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = ({quantity}) => {
    const {getQuantity} = useContext(CartContext);
    return (
        <>
            <Link to={'/cart'}><button type="button" className="btn btn-primary">🛒<p>{getQuantity()}</p></button></Link>
        </>
    );
}

export default CartWidget;
