"use client";
import { useFilter } from "@/app/hooks/useFilter";
import { FilterType } from "@/app/types/filter-types";
import styled from "styled-components";

interface FilterByTypeProps {}

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  color: var(--textos-dark);
  text-align: center;
  font-family: inherit;
  font-size: 1rem;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  line-height: 1.375rem;
  text-transform: uppercase;
  cursor: pointer;

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
`;

export const FilterByType = () => {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    console.log(value);
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.TSHIRTS}
        onClick={() => handleChangeType(FilterType.TSHIRTS)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
};
