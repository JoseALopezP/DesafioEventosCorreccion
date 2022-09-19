import {React, useState} from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = ({quantity}) => {
    return (
        <>
            <Link to={'/cart'}><button type="button" className="btn btn-primary">🛒<p>{window.localStorage.getItem('cartItemQuantity')}</p></button></Link>
        </>
    );
}

export default CartWidget;
