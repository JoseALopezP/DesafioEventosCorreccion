import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../Context/CartContext';
import { useParams, Link } from 'react-router-dom';
import ProductDetailImg from '../ProductExpoDetail/ProductDetailImg';
import './index.css';
import {ItemCount} from './ItemCount';
import { doc, getDoc} from 'firebase/firestore';
import db from '../../services/firebase';

const ProductDetail = (props) => {
    const { addToCart } = useContext(CartContext);
    const [completedPurchase, setCompletedPurchase] = useState(false);
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    const getSelected = async(idProduct) =>{
        try{
            const document = doc(db,"Products", idProduct)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setProduct(result)
        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getSelected(id)
    }, [id]);

    const onAdd = (quantity) =>{
        setCompletedPurchase(true);
        addToCart(product, quantity);
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
