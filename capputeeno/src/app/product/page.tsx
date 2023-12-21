"use client";
import { styled } from "styled-components";
import { BackButton } from "../components/Icons/back-button";
import { DefaultPageLayout } from "../components/DefaultPageLayout/default-page-layout";

interface ProductProps {}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Product = ({}: ProductProps) => {
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigation="/" />
        <section>Informações do Produto</section>
      </Container>
    </DefaultPageLayout>
  );
};

export default Product;
