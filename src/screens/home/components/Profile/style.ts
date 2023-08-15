import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    padding: 2.5rem;
    border-radius: 0.625rem;

    background: ${props => props.theme["BASE_INPUT"]};

    img{
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 0.5rem;
    }

    .box{
        width: 100%;

        .profileTitle{
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            margin-bottom: 0.5rem;
    
            button{
                display: flex;
                align-items: center;
                gap: 0.5rem;

                font-family: Nunito;
                font-size: 0.75rem;
                font-style: normal;
                font-weight: 700;
                text-transform: uppercase;

                border: none;
                cursor: pointer;

                color: ${props => props.theme["BLUE"]};
                background: transparent;

                &:hover{
                    border-bottom: 1px solid ${props => props.theme.BLUE};
                }
            }
    
            div{
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        }
    }
    
    .linksProfile{
        display: flex;
        align-items: center;

        gap: 1.5rem;
        margin-top: 1.5rem;

        .iconProfile{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`