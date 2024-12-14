import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CartItem from "./cart-item.component";

describe('cart-item', () => {
    const mockItem = {
        imageUrl: 'https://www.testImage.com', 
        price: 90, 
        name: 'jackets', 
        quantity: 2
    };
    const wrapper = render(<CartItem item={mockItem} />);

    it('should render CartItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});