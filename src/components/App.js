import React, { useState } from 'react';
import Viewer from './Viewer';
import Button from './Button';
import AudioPlayer from './AudioPlayer';
import Footer from './Footer';
import styled from  'styled-components';

const AppContainer = styled.div`
    flex-direction: column;
    padding: 2em;
    min-height: 100vh;
    & > div:first-of-type {
        flex-grow: 1;
    }
    & > div:last-of-type {
        flex-grow: 0;
    }
`

const ContentRow = styled.div`
    & > * {
        margin: 1em;
        box-shadow: 2px 4px 4px gray;
    }
`

export default function App() {
    const [rolling, setRolling] = useState(false);

    return (
        <AppContainer>
            <AudioPlayer rolling={rolling} />
            <ContentRow>
                <Viewer rolling={rolling} setRolling={setRolling} />
                <Button blocky rolling={rolling} setRolling={setRolling}>
                    <p>Roll</p>
                </Button>
            </ContentRow>
            <Footer />
        </AppContainer>
    );
}
