import React, {useContext, useState} from 'react';
import {CartContext} from '../Context/CartContext'
import db from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const [buyer, setBuyer] =useState({
        name:'',
        email:'',
        tel:''
    })
    const { name, email, tel } = buyer
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState()

    const onInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }
    const navigate = useNavigate()
    const orderGenerator = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log("OrdenNro:", order)
            setOrderId(order.id)
            clearCart()

        } catch (error) {
            console.log(error)
        }
    }


    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(cart)
        const items = cart.map(aux => { return { id: aux.item.id, title: aux.item.marca, price: aux.item.precio, amount: aux.quantity } })
        const date = new Date()
        const total = getTotal()
        const data = { buyer, items, date, total }
        console.log('data', data)
        orderGenerator(data)
    }

    const onClear = () => {
        clearCart()
        console.log("vacio carrito")
        navigate('/cart')
    }


    return (
        <>
            {!orderId ?
            (<form onSubmit={onSubmitForm}>
                <div className="form-group formBlock1">
                <legend>Completar con los siguientes datos:</legend>
                <label className="form-label mt-4">Direccion de E-mail:</label>
                <input name='email' nametype="email" defaultValue={email} className="form-control emailInput" placeholder="email@ejemplo.com" onChange={onInputChange} />
                <label className="form-label mt-4">Nombre y apellido:</label>
                </div> 
                <div className="form-group formBlock2">
                    <input name='name' type="name" defaultValue={name} className="form-control nameInput" placeholder="nombre y apellido" onChange={onInputChange} />
                    <label className="form-label mt-4">Teléfono:</label>
                </div>
                <div className="form-group formBlock3">
                    <input name='tel' type="telephone" defaultValue={tel} className="form-control telInput" placeholder="teléfono" onChange={onInputChange} />
                    <button type="submit" className="btn btn-primary" value="Finalizar Compra">Submit</button>
                </div>
            </form>) :
            (<div className="alert alert-dismissible alert-primary">
            <strong>Orden completada - </strong>Su orden de compra es: {orderId} <Link to='/'>Volver al inicio</Link>
            </div>)
            }
            <button className="btn btn-danger" onClick={onClear}>Cancelar Compra</button>
        </>
    );
}

export default CheckoutForm;
