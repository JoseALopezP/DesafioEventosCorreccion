import React from 'react';
import ProductDetailImg from './ProductDetailImg';
import { Link } from 'react-router-dom';
import "./index.css";

const ProductExpoDetail = (item) => {
    return (
        <>
        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">{item.product.tipo}</div>
            <div className="card-body">
            <ProductDetailImg name={item.product.tipo} index={item.product.codigo}/>
            <h4 className="card-title">{item.product.marca}</h4>
            <p className="card-text">Precio: ${item.product.precio}</p>
            <Link to={'/Product/' + item.product.codigo}><button type="button" className="btn btn-outline-primary btnMoreInfo">INFO</button></Link>
            </div>
        </div>
        </>
    );
}

export default ProductExpoDetail;
