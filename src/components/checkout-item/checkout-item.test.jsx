import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CheckoutItem } from "./checkout-item.component";

describe('checkout-item', () => {
    const mockItem = {
        name: 'jacket', 
        price: 90, 
        quantity: 2, 
        imageUrl: 'https://www.testImage.com'
    };
    const clearItem = vi.fn();
    const addItem = vi.fn(); 
    const removeItem = vi.fn();
    const mockProps = {
        cartItem: mockItem, 
        clearItem, 
        addItem,  
        removeItem
    }
    const wrapper = render(<CheckoutItem {...mockProps} />);

    it('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call removeItem when left arrow clicked', () => {
        wrapper.find('QtyCont').childAt(0).simulate('click');
        expect(removeItem).toHaveBeenCalled();
    });

    it('should call addItem when right arrow clicked', () => {
        wrapper.find('QtyCont').childAt(2).simulate('click');
        expect(addItem).toHaveBeenCalled();
    });

    it('should call clearItem when cross is clicked', () => {
        wrapper.find('RemoveBtnCont').simulate('click');
        expect(clearItem).toHaveBeenCalled();
    })
})