import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailImg from '../ProductDetail/ProductDetailImg';
import './index.css';
import ItemCount from './ItemCount';

const Product = () => {
    const [product, setProductCard] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch('https://62e85fc093938a545be52125.mockapi.io/productos')
        .then(response => response.json())
        .then(data =>{
            const product = data.find(product => product.codigo == id)
            setProductCard(product);
        })
    }, []);
    
    return (
        <div className="card border-primary mb-3 pDescriptionCard">
            <div className="card-body card-bodyImg">
                <ProductDetailImg name={product.tipo} index={product.codigo}/>
            </div>
            <div className="card bg-light mb-3 card-bodyPrice">
                <div className="card-body">
                    <h4 className="card-title">{product.tipo} <strong>{product.marca}</strong></h4>
                    <div className="form-group">
                    <table className="table table-hover">
                        <tbody>
                            <tr className="table-success">
                                <th scope="row">Precio:</th>
                                <td>${product.precio}</td>
                            </tr>
                        </tbody>
                    </table>
                    <ItemCount product={product}/>
                    </div>
                </div>
            </div>
            <div className="card text-white bg-primary mb-3 pInfoCard card-bodyInfo">
                <div className="card-body">
                    <h4 className="card-title">MÁS INFORMACIÓN</h4>
                    <p className="card-text">{product.info}</p>
                </div>
            </div>
        </div>
    )
};

export default Product;
