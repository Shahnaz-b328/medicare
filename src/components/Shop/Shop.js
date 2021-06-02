import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Products from '../Products/Products';
import './Shop.css';
const Shop = (props) => {
    console.log(props)
    const { products, addToCart} = props;
    return (
        <section className="container mx-5 my-5">
            <div className="row">
                {
                    products.map(pd => <Products product={pd}
                        key={pd.id}
                        addToCart={addToCart}
                    ></Products>)
                }
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);