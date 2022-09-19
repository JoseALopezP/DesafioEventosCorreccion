import React from 'react';
import ProductExpoDetail from '../ProductExpoDetail';

const ProductList = ({list}) =>{
    console.log(list);
    return(
        <>
        {list.map((product, index) =>
            <ProductExpoDetail product={product} key={index}/>
        )}
        </>
    )      
};

export default ProductList