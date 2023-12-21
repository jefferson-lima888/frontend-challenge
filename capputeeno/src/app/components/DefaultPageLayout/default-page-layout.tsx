"use client";
import { styled } from "styled-components";

export const DefaultPageLayout = styled.div`
  padding: 0.75rem 1.5rem;
  background-color: var(--shapes-light);
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 2.12rem 10rem;
  }
`;
