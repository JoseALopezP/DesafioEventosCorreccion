import React from 'react';
import './ItemListContainer.css'
import ProductListContainer from './ProductListContainer';

const ItemListContainer = () => {
    return (
        <>
            <div className="container">
                <ProductListContainer/>
            </div>
        </>
    );
}

export default ItemListContainer
