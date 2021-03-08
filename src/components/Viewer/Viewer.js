import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BlankTable from '../../graphics/blank table.png';
import gifs from '../../graphics';

const ViewerContainer = styled.div`
    max-height: auto;
    width: 600px;
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: ${({ theme }) => theme.contentRadius};
    overflow: hidden;
`

const ViewerContent = styled.img`
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
`

export default function Viewer({ rolling, setRolling, ...rest }) {
    const [currentRoll, setCurrentRoll] = useState(null);

    useEffect(() => {
        console.log("effect. Rolling ?",rolling);
        if(rolling) {
            const die1 = Math.floor(Math.random()*6+1);
            const die2 = Math.floor(Math.random()*6+1);
            const roll = die1+"-"+die2;
            console.log("playing "+roll+".gif");
            setCurrentRoll(null);
            setTimeout(() => setCurrentRoll(gifs[roll]), 1000);
            setTimeout(() => setRolling(false), 3000);
        }
    }, [rolling, setRolling]);

    useEffect(() => console.log("current roll is now "+currentRoll), [currentRoll]);

    return (
        <ViewerContainer>
            <ViewerContent src={currentRoll ?? BlankTable} />
        </ViewerContainer>
    );
}