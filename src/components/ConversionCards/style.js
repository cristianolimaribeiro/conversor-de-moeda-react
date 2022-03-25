import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,21rem);
    gap: 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    justify-content: center;
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        color: var(--text-title);
        border-radius: 0.25rem;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;

            img{
                width: 2rem;
            }
        }
        .price-conversion-container{
            margin-top: 2rem;
            padding: 0;
            input{
                height: 2rem;
                outline: none;
                padding-left: 0.25rem;

                &::placeholder{
                    padding-left: 0.25rem;
                }
            }
        }
        .price-converted{
            display: flex;
            align-items: center;
            margin-top: 1rem;
            padding: 0;
            p{
                font-size: 1.2rem;
                font-weight: 600;
                margin-right: 0.25rem;
            }
            span{
                font-size: 1.2rem;
                font-weight: 600;
            }
        }
    }
`