import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        /* box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-500"]}; */
    }

    body {
        background: ${(props) => props.theme["gray-100"]};
        color: ${(props) => props.theme["gray-900"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, span, p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme["gray-600"]};
        outline: none;
        border: none;
    }

    h1, h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        color: ${(props) => props.theme["gray-900"]};
    }

    h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${(props) => props.theme["gray-700"]};
    }
`;
