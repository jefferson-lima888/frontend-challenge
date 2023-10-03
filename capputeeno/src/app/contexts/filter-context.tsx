"use client";
import { createContext } from "react";
import { FilterType } from "../types/filter-types";
import { ReactNode, useState } from "react";
import { PriorityType } from "../types/priority-types";

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setPriority: (value: PriorityType) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        setSearch,
        setType,
        setPage,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
