import { styled } from "styled-components";

export const Card = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

background: rgba(255, 255, 255, 0.40);
backdrop-filter: blur(10px);
border-radius: 0.5rem 0.5rem 0rem 0rem;
width: 16rem;

img {
    width: 16rem;
    height: 18.75rem;
}

h3 {
    color: var(--textos-dark-inputs);
    font-family: inherit;
    font-size: 1rem;
    font-weight: 300;
    line-height: 150%;
}

p {
    color: var(--shapes-dark-tooltip);
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 150%;
}

div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem 0.75rem;

    > div {
        width: 14.25rem;
        height: 0.0625rem;
        background: var(--shapes-02);
        margin: 0.75rem 0;
        padding: 0;
    }
}
`