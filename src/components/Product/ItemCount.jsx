import {React, useState} from 'react';

const ItemCount = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    let test = parseInt(window.localStorage.getItem('cartItemQuantity'));
    if(isNaN(test)){
        window.localStorage.setItem('cartItemQuantity', 1)
    }
    const [cartItemQuantity, setCartItemQuantity] = useState(
        window.localStorage.getItem('cartItemQuantity')
    )
    const addToCart = () =>{
        console.log(quantity);
        const productCart = ({id: product.codigo, quant: quantity});
        console.log('Se han agregado ', quantity, 'gr de ', product.tipo, product.marca)
        onAdd();
    };
    const onAdd = () =>{
        console.log(cartItemQuantity);
        setCartItemQuantity(parseInt(cartItemQuantity) + 1);
        console.log(cartItemQuantity);
        window.localStorage.setItem('cartItemQuantity', parseInt(cartItemQuantity))
    }
    return (
        <>
        <div className="input-group mb-3">
            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={event => setQuantity(event.target.value)} />
            <span className="input-group-text">gr</span>
        </div>
        <button className="btn btn-lg btn-primary btnAddCart" type="button" onClick={() => addToCart()}><p>Agregar al Carrito</p></button>
        </>
    );
}

export default ItemCount;
