import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background: ${props => props.theme["BASE_BACKGROUND"]};
        color:${props => props.theme["BASE_TEXT"]};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        outline: none;
    }

    a{
        text-decoration: none;
        color:${props => props.theme["BASE_TITLE"]};
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.BLUE};
    }
`;