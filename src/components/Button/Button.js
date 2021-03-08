import React from 'react';
import styled from 'styled-components';

const ButtonObj = styled.div`
    width: 6em;
    height: 4em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid ${props => props.rolling ? ({ theme }) => theme.text : ({ theme }) => theme.faded};
    padding: 0.33em;
    /* border-radius: 20%; */
    border-radius: ${({ theme }) => theme.contentRadius};
    font-weight: 500;
    font-size: 2rem;
    cursor: ${props => props.rolling ? "wait" : "pointer"};
    color: inherit;
    background: ${props => props.rolling ? ({ theme }) => theme.dark : ({ theme }) => theme.bright};
    &:active {
        background: ${({ theme }) => theme.dark};
        border: 2px solid ${({ theme }) => theme.text};
    }
`

export default function Button(props) {
    return (
        props.rolling
            ?
            <ButtonObj 
                onClick={() => props.rolling ? null : props.setRolling(true)}
                rolling
            >
                {props.children}
            </ButtonObj>
            :
            <ButtonObj 
                onClick={() => props.rolling ? null : props.setRolling(true)}
            >
                {props.children}
            </ButtonObj>
    )
}