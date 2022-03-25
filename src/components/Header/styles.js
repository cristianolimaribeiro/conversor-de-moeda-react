import styled from "styled-components";

export const Container = styled.header`
    background: var(--darkest-gray);
`
export const Content = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;

    img{
        width: 6rem;
    }
    h2{
        color: var(--shape);
    }
`