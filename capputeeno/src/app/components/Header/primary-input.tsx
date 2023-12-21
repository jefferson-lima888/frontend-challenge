"use client";
import styled from "styled-components";
import { SearchIcon } from "../Icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  /* display: inline-flex; */
  padding: 0.5625rem 1rem;
  /* justify-content: center; */
  /* align-items: flex-start; */
  width: 100%;
  /* gap: 5.625rem; */
  border: none;
  border-radius: 0.5rem;
  background: var(--bg-secondary);

  color: var(--textos-dark);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
`;
const InputContainer = styled.div`
  position: relative;
  width: 15.625rem;

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 22rem;
    margin-left: auto;
    margin-right: 1.875rem;
  }
`;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export const PrimaryInputWSearchIcon = ({
  value,
  handleChange,
}: InputProps) => {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      />
      <SearchIcon />
    </InputContainer>
  );
};
