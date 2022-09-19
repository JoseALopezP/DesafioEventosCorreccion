import React from 'react';
import ProductDetail from '../ProductDetail';

const ProductList = ({list}) =>{
    console.log(list);
    return(
        <>
        {list.map((product, index) =>
            <ProductDetail product={product} key={index}/>
        )}
        </>
    )      
};

export default ProductList