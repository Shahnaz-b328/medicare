import React from 'react';

const Products = (props) => {
    const { addToCart, product } = props;
    return (
        <div className="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">{product.name}</p>
                    <p class="card-text">Price: ${product.price} <button style={{marginLeft:'7px', color:'white', backgroundColor:'blue', border:'none'}} className="ml-5" onClick={() => addToCart(product.name)}>Add Cart</button></p>
                </div>
            </div>
        </div>
    );
};

export default Products;