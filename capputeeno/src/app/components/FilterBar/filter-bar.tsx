"use client";
import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "../FilterByPriority/filter-by-priority";

interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
};
