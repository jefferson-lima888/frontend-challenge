'use client'
import { useLocalStorage } from "@/app/hooks/useLocaStorage"
import { CartIcon } from "./cart-icon"
import { styled } from "styled-components";

const CartCount = styled.span`
width: 23px;
height: 23px;
background-color: var(--delete-color);
color: #FFF;

position: absolute;
right: -15px;
top: 50%;
text-align: center;
border-radius: 16px;
font-size: 12px;
font-weight: 500;
line-height: 1.525rem;
`

const Container = styled.div`
position: relative;
`

export const CartControl = () => {
    const { value } = useLocalStorage('cart-items');
    return (
        <Container>
            <CartIcon/>
            {value?.length && <CartCount>{value?.length}</CartCount>}
        </Container>
    )
}