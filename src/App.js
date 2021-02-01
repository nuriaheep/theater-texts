import React from 'react'
import texts from './texts.json'
import Linia from './components/Linia'
import Navigation from './components/Navigation'
import { render } from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplayIndex: 0
        };
    };

    substractOnClick = () => {
        const { currentDisplayIndex } = this.state;
        this.setState(() => ({
            currentDisplayIndex: currentDisplayIndex > 0
                ? currentDisplayIndex - 1
                : currentDisplayIndex
        }));
    };

    addOnClick = () => {
        const { currentDisplayIndex } = this.state;
        this.setState(() => ({
            currentDisplayIndex: currentDisplayIndex < texts.length
                ? currentDisplayIndex + 1
                : currentDisplayIndex
        }));
    };

    render() {
        return (
            <div>
                <Navigation onPrevButtonClick={this.substractOnClick} onNextButtonClick={() => this.addOnClick()} />
                {texts.map((text, i) => {
                    return <Linia key={i} text={text} marked={i === this.state.currentDisplayIndex} />
                })}
            </div>
        );
    };
};

export default App;
