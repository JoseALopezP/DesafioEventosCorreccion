import React from 'react';

const ProductDetailImg = ({name, index}) => {
    return (
        <div className={`imgProductBlock imgProductBlock${index}`}>
            <img src={`../../assets/${name}.jpg`} alt={name}/>
        </div>
    );
}

export default ProductDetailImg;
