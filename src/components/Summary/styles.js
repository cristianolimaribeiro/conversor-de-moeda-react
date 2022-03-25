import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,21rem);
    gap: 2rem;
    margin: 0 auto;
    margin-top: -10rem;
    justify-content: center;
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        color: var(--text-title);
        border-radius: 0.25rem;
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            font-size: 1.5rem;
            color: var(--text-title);
        }
        img{
            width: 2rem;
        }
    }
    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
    }
    p{
        margin-top: 1rem;
        color: var(--text-body);
    }
`