import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${props => props.theme["BASE_PROFILE"]};

    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        gap: 1.25rem;
        margin-bottom: 3rem;

        font-family: Coda;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;

        color: ${props => props.theme.BLUE};
    }
`