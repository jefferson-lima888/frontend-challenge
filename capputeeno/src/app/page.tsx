"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterBar } from "./components/FilterBar/filter-bar";
import { ProductsList } from "./components/ProductsList/products-list";
import styles from "./page.module.css";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  );
}
