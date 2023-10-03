"use client";
import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  /* display: inline-flex; */
  padding: 0.5625rem 1rem;
  /* justify-content: center; */
  /* align-items: flex-start; */
  width: 22rem;
  /* gap: 5.625rem; */
  border: none;
  border-radius: 0.5rem;
  background: var(--bg-secondary);

  color: var(--textos-dark);
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;
const InputContainer = styled.div`
  position: relative;
  width: 22rem;

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export const PrimaryInputWSearchIcon = (props: InputProps) => {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(e) => props.handleChange(e.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
};
