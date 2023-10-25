"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "../contexts/filter-context";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: React.ReactNode;
}

const theme = {
  desktopBreakpoint: "968px",
  tabletBreakpoint: "768px",
};

export const DefaultProviders = ({ children }: DefaultProvidersProps) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
};
