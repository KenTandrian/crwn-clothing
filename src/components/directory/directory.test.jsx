import React from "react";
import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

// Import the Directory component without CONNECT (not default)
import { Directory } from './directory.component';

/*
What to test:
1. Render Directory component correctly.
2. Check if the rendered MenuItem match the number of section in props.
*/

describe('Directory Component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            sections: [
                { id: 1, title: 'hats' },
                { id: 2, title: 'jackets' }
            ]
        }
        wrapper = render(<Directory {...mockProps} />);
    });

    it('should render Directory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the correct number of MenuItem component', () => {
        expect(wrapper.find('withRouter(MenuItem)').length).toEqual(2);
    });
})