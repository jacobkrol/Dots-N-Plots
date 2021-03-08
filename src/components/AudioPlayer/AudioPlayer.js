import React, { useState, useEffect } from 'react';
import DiceRoll from '../../graphics/dice roll.mp3';

export default function AudioPlayer({ rolling, ...rest }) {
    const [audio] = useState(new Audio(DiceRoll));
    useEffect(() => {
        if(rolling) {
            audio.play();
        }
    }, [rolling]);
    return (
        <></>
    )
}