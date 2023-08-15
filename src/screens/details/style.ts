import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Box = styled.div`
    max-width: 90rem;
    padding: 0 18rem;
    margin-top: -5rem;
    
    padding-bottom: 5rem;
`

export const Title = styled.div`
    padding: 2rem;
    border-radius: 0.625rem;
    background: ${props => props.theme["BASE_INPUT"]};

    .headerButtons{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            border: none;
            cursor: pointer;

            color: ${props => props.theme.BLUE};
            background: transparent;

            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        button:nth-last-child(1){
            &:hover{
                border-bottom: 1px solid ${props => props.theme.BLUE};
            }
        }
    }

    h1{
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 130%; 

        margin-top: 1.25rem;
        margin-bottom: 0.75rem;
    }

    .footerDetails{
        display: flex;
        align-items: center;
        gap: 2rem;

        .iconProfile{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`

export const Content = styled.article`
    padding: 2.5rem 2rem;
    text-align: justify;
`
