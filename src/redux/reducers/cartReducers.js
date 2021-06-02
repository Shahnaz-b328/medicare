import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
const initialState = {
    cart: [],
    products: [
        {name: 'Multivitamin', id: 1, price:15, image:'https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/shop-img-1.jpg'},
    {name: 'Contact Lenses', id:2, price:5000, image:'https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/shop-img-2.jpg'},
    { name: 'Antibiotics', id:3, price:18, image:'https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/shop-img-4.jpg'},
    { name: 'Dental Light', id:4, price:400, image:'https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/shop-img-5.jpg'},
    { name: 'Stethoscope', id:5, price:100, image:'https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/shop-img-6.jpg'},
    { name: 'Hand Sanitiser', id:6, price:70, image:'https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/shop-img-7.jpg'}
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart, newId]
            return { ...state, cart: newCart };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return { ...state, cart: remainingCart }

        default:
            return state;
    }
}
export default cartReducers;