import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    & > * {
        margin: 0 0.5em;
    }
`

export default function Footer() {
    return (
        <FooterContainer>
            <a href="https://kroljs.com" target="_blank" rel="noopener noreferrer">Jacob Krol 2021</a>
            <span>&#9733;</span>
            <p>Dots N Plots - Coming Soon!</p>
        </FooterContainer>
    )
}