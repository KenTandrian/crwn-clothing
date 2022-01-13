import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; // this is actually optional, only for scalability
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdownContainer, EmptyMessageContainer, CartDropdownButton, CartItemsContainer } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer isScrollable={cartItems.length}>
            {
                cartItems.length // Using type coercion with double equal
                ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                : (<EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>)
            }
        </CartItemsContainer>
        <CartDropdownButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
// We don't need to make mapDispatchToProps anymore, because in default, dispatch() will be passed as props by connect()

// The one that should be wrapped is the connect. Hence, withRouter will get the modified component
export default withRouter(connect(mapStateToProps)(CartDropdown));