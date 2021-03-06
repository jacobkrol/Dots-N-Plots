import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.body || '#F5F5F5'};
    color: ${({ theme }) => theme.text || '#24292e'};
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

a {
    color: inherit;
}

a:hover {
    text-decoration: none;
}
`