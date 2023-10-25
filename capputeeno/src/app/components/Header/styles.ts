'use client'
import styled from 'styled-components';


export const TagHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.75rem 1.5rem;

/* > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
} */

@media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 1.19rem 10rem;
}
`
export const Logo = styled.a`
color: var(--logo-color);
font-size: 1.25rem;
font-weight: 400;
line-height: 150%;

@media(min-width: ${props => props.theme.tabletBreakpoint}) {
    font-size: 1.5rem;
}

@media(min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 2.5rem;
}
`