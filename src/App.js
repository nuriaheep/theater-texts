import React, { useState } from 'react'
import texts from './texts.json'
import Linia from './components/Linia'
import Navigation from './components/Navigation'

function App() {

    const [currentDisplayIndex, setDisplayIndex] = useState(0);

    const substractOnClick = () => {
        setDisplayIndex(currentDisplayIndex > 0
            ? currentDisplayIndex - 1
            : currentDisplayIndex);
    };

    const addOnClick = () => {
        setDisplayIndex(currentDisplayIndex < texts.length
            ? currentDisplayIndex + 1
            : currentDisplayIndex);
    };

    return (
        <div>
            <Navigation onPrevButtonClick={substractOnClick} onNextButtonClick={addOnClick} />
            {texts.map((text, i) => <Linia key={i} text={text} marked={i === currentDisplayIndex} />)}
        </div>
    );

};

export default App;
