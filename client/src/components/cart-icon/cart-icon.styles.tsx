import styled from "styled-components";
// @ts-ignore
import ShoppingIcon from '../../assets/shopping-bag.svg?react';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
CartIconContainer.displayName = 'CartIconContainer';

export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 24px;
    height: 24px;
`;
ShoppingIconContainer.displayName = 'ShoppingIconContainer';

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;
ItemCountContainer.displayName = 'ItemCountContainer';