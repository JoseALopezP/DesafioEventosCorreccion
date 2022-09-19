import React, {useEffect, useState} from 'react';
import ProductList from '../ProductList';


const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    function ProductDetailContainer(){
        let data;
        useEffect(() =>{
            const askProducts = async() =>{
            let res = await fetch("https://62e85fc093938a545be52125.mockapi.io/productos");
            data = await res.json();
            }
            askProducts().then(() =>{
                setProducts(data)
            });
        }, [])
    }
    ProductDetailContainer();
    return(
        <div className="container productContainer">
            <ProductList list={products}/>
        </div>
    )
};

export default ProductListContainer