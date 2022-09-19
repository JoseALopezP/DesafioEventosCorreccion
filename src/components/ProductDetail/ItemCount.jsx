import {React, useState} from 'react';

export const ItemCount = ({onAdd}) => {
    //Recibo al función onAdd y envío la cantidad para ser ejecutada en ProductDetail
    const [quantity, setQuantity] = useState(1);
    return (
        <>
        <div className="input-group mb-3">
            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={event => setQuantity(event.target.value)} />
            <span className="input-group-text">gr</span>
        </div>
        <button className="btn btn-lg btn-primary btnAddCart" type="button" onClick={() => onAdd(quantity)}><p>Agregar al Carrito</p></button>
        </>
    );
}

export default ItemCount;
