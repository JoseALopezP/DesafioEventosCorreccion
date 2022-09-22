import {createContext, useState} from 'react';

export const CartContext = createContext({});

const {Provider} = CartContext;

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);
    const clearCart = () => {
        setCart([]);
    }
    const addToCart = (item, quantity) => {
        console.log(item);
        if(isInCart(item.codigo)){
            const auxCart = [...cart];
            for(const aux of auxCart){
                if(aux.item.codigo === item.codigo){
                    aux.quantity += parseInt(quantity);
                }
            };
            setCart(auxCart);
            console.log(cart);
        }else{
            setCart([
                ...cart, {
                    item: item,
                    quantity: parseInt(quantity)
                }
            ]);
            console.log(cart);
        }
    }
    const removeFromCart = (id) => {
        console.log(id);
        const auxCart = [...cart].filter(element => element.item.codigo !== id);
        setCart(auxCart)
    }
    const isInCart = (id) =>{
        return cart.find(element => element.item.codigo === id)
    }
    const getTotal = () => {
        let total = 0;
        cart.forEach((element) => {
            total += element.item.precio * (element.quantity / 100)
        })
        return (Math.round(total * 100)/100);
    }
    const getQuantity = () => {
        return cart.length;
    }
    const context = {
        clearCart,
        addToCart,
        removeFromCart,
        getTotal,
        getQuantity,
        cart,
    }
    return(
        <>
        <Provider value={context}>
            {children}
        </Provider>
        </>
    )
}