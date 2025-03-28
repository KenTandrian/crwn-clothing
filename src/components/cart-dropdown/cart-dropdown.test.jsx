import React from "react";
import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Import CartDropdown component without CONNECT (not the default)
import { CartDropdown } from "./cart-dropdown.component";
import CartItem from "../cart-item/cart-item.component";

// Mocking useSelector and useDispatch
import * as reactRedux from 'react-redux'
import * as reactRouter from 'react-router';
import toggleCartHidden from '../../redux/cart/cart.actions';

/*
What we need to test:
1. Render the component
2. Call history.push when the CartDropdown button is clicked
3. The number of rendered CartItem should match the length the CartItems props
4. Render EmptyMessageContainer when the cart is empty
*/

describe('cart-dropdown', () => {
    let wrapper;
    const mockCartItems = [
        { id: 1, name: 't-shirt' }, 
        { id: 2, name: 'shoes' }, 
        { id: 3, name: 'chinos' }
    ];
    const mockDispatch = vi.fn();
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()

        // Mocking useSelector
        useSelectorMock.mockReturnValue(mockCartItems);
        useDispatchMock.mockReturnValue(mockDispatch);

        // Mocking useNavigate
        jest.mock('react-router', () => ({
            ...jest.requireActual('react-router'),
            useNavigate: () => ({
                push: mockHistory.push,
            }),
        }));

        wrapper = render(<CartDropdown />);
    });
    
    it('should render cart-dropdown', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render an equal number of CartItem components as the cartItems prop', () => {
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
    });

    it('should render EmptyMessageContainer if cartItems is empty', () => {
        useSelectorMock.mockClear()
        useSelectorMock.mockReturnValue([]);

        const newWrapper = render(<CartDropdown />);
        expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
    });
});