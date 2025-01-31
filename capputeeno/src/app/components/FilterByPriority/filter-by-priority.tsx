"use client";
import { styled } from "styled-components";
import { ArrowIcon } from "../Icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "@/app/hooks/useFilter";
import { PriorityType } from "@/app/types/priority-types";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--textos-dark);
    text-align: center;
    font-family: inherit;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;

    display: flex;
    justify-content: center;

    svg {
      margin-left: 0.375rem;
      padding-bottom: 0.25rem;

      @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
        margin-left: 1rem;
      }
    }

    @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
      font-size: 0.875rem;
      line-height: 1.375rem;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  width: 15.625rem;
  border-radius: 0.25rem;
  background: var(--shapes-01);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 1rem;
  list-style: none;
  top: 100%;
  right: 0.5rem;
  z-index: 999;

  li {
    color: var(--textos-dark);
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;
    cursor: pointer;
  }

  li + li {
    margin-top: 0.25rem;
  }
`;

export const FilterByPriority = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
    // (prev) => !prev
  };

  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false);
  };
  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
};
