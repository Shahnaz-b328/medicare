import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
    console.log(props)
    const { cart, removeFromCart } = props;
    return (
        <div className="mt-5 container">
            <h1 style={{ color: 'navy', textAlign: 'center' }}>Medicare</h1>
            <ul>
                {
                    cart.map(name =>
                        <p>{name}
                            <button style={{ marginLeft: '7px', color: 'white', backgroundColor: 'blue', border: 'none' }} onClick={() => removeFromCart(name)}>Delete</button>
                        </p>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);