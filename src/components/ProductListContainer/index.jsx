import { collection, getDocs } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import ProductList from '../ProductList';
import db from '../../services/firebase';


const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    const getData = async() =>{
        try{
            const document = collection(db, 'Products')
            const col = await getDocs(document)
            console.log("col.docs", col.docs)
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setProducts(result)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        getData()
    }, [])
    
    //ProductDetailContainer();
    return(
        <div className="container productContainer">
            <ProductList list={products}/>
        </div>
    )
};

export default ProductListContainer