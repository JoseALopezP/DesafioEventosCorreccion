import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetailImg from '../ProductExpoDetail/ProductDetailImg';
import './index.css';
import {ItemCount} from './ItemCount';

const ProductDetail = () => {
    useEffect(() => {
        fetch('https://62e85fc093938a545be52125.mockapi.io/productos')
        .then(response => response.json())
        .then(data =>{
            const product = data.find(product => product.codigo == id)
            setProductCard(product);
        })
    }, []);
    const [completedPurchase, setCompletedPurchase] = useState(false);

    const [cartItemQuantity, setCartItemQuantity] = useState(window.localStorage.getItem('cartItemQuantity'))

    const [product, setProductCard] = useState([]);

    const {id} = useParams();

    const testCart = () =>{
        let test = parseInt(window.localStorage.getItem('cartItemQuantity'));
        if(isNaN(test)){
        window.localStorage.setItem('cartItemQuantity', 1)
        }
    }
    
    const addToCart = (quantity) =>{
        console.log(quantity);
        const productCart = ({id: product.codigo, quant: quantity});
        console.log('Se han agregado ', quantity, 'gr de ', product.tipo, product.marca)
    };
    const onAdd = (quantity) =>{
        testCart();
        setCompletedPurchase(true);
        console.log(cartItemQuantity);
        setCartItemQuantity(parseInt(cartItemQuantity) + 1);
        console.log(cartItemQuantity);
        window.localStorage.setItem('cartItemQuantity', parseInt(cartItemQuantity))
        addToCart(quantity);
    }
    //Exporto una función onAdd al hijo que sería (itemCount) para generar el contador de productos.
    //También guardé la cantidad en localstorage para que aumente la cantidad del cartWidget caundo se actualiza la página

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
                    {completedPurchase ? (
                        <Link to='/Cart'><button className="btn btn-lg btn-primary btnAddCart" type="button"><p>Ir al Carrito</p></button></Link>
                    ) : (
                        <ItemCount onAdd={onAdd}/>
                    )}
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

export default ProductDetail;
