"use client";
import { styled } from "styled-components";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterBar } from "./components/FilterBar/filter-bar";
import { ProductsList } from "./components/ProductsList/products-list";
import { DefaultPageLayout } from "./components/DefaultPageLayout/default-page-layout";
// import styles from "./page.module.css";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  //esse css foi enviado para default-page-layout.tsx para ficar mais organizado com as margens
  /* padding: 0.75rem 1.5rem;
  background-color: var(--shapes-light);
  min-height: 100vh; */

  /* @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 2.12rem 10rem;
  } */
`;

export default function Home() {
  //QueryClientProvider foi enviado para default-providers.tsx para concentrar todos os providers em um só lugar
  // const client = new QueryClient();
  return (
    // <QueryClientProvider client={client}>
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
    // </QueryClientProvider>
  );
}
