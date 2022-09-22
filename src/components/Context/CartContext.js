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
                    aux.quantity += quantity;
                }
            };
            setCart(auxCart)
        }else{
            setCart([
                ...cart, {
                    item: item,
                    quantity: parseInt(quantity)
                }
            ]);
        }
    }
    const removeFromCart = (id) => {
        const auxCart = [...cart].filter(aux => aux.item.codigo === id);
        setCart(auxCart)
    }
    const isInCart = (id) =>{
        return cart.find((element) => element.item.codigo === id)
    }
    const context = {
        clearCart,
        addToCart
    }
    return(
        <>
        <Provider value={context}>
            {children}
        </Provider>
        </>
    )
}