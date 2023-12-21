"use client";
import { useLocalStorage } from "@/app/hooks/useLocaStorage";
import { CartIcon } from "../Icons/cart-icon";
import { styled } from "styled-components";

const CartCount = styled.span`
  width: 1.438rem;
  height: 1.438rem;
  background-color: var(--delete-color);
  color: #fff;

  position: absolute;
  /* right: -15px;
  top: 50%; */
  margin-top: 1rem;
  margin-left: -0.5rem;
  text-align: center;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.525rem;
`;

const Container = styled.div`
  position: relative;
`;

export const CartControl = () => {
  const { value } = useLocalStorage("cart-items", []);
  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
};
