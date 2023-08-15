import styled from "styled-components";

export const PostContainer = styled.div`
    width: 26rem;
    height: 16.25rem;

    padding: 1.5rem;
    border-radius: 0.625rem;

    cursor: pointer;

    background: ${props => props.theme["BASE_POST"]};

    &:hover{
        border: 2px solid ${props => props.theme["BASE_BORDER"]};
    }

    div{
        display: flex;
        align-items: center;

        gap: 1rem;
        margin-bottom: 1.25rem;

        h1{
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 160%;

            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;

            -webkit-line-clamp:1; 
            -webkit-box-orient: vertical;
        }
    
        span{
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 160%;
            white-space: nowrap;
        }
    }

    p{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;

        -webkit-line-clamp:6; 
        -webkit-box-orient: vertical;

        font-size: 1rem;
        font-weight: 400;
        line-height: 160%;
    }
`