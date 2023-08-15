import styled from "styled-components";

export const InputContainer = styled.div`
    margin-top: 4.5rem;
    margin-bottom: 3rem;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.75rem;

        label{   
            font-size: 1.125rem;
            font-weight: 700;
            line-height: 160%;
        }
    
        span{ 
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 160%;
        }
    }

    input{
        width: 100%;
        display: flex;
        align-items: center;

        gap: 0.5rem;
        padding: 0.75rem 1rem;

        border-radius: 0.375rem;
        border: 1px solid ${props => props.theme["BASE_BORDER"]};
        color: ${props => props.theme["BASE_TEXT"]};
        background: ${props => props.theme["BASE_INPUT"]};
    }
`