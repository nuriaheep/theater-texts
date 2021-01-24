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
        }

    }

    substractOnClick = () => {
        this.setState(() => ({
            currentDisplayIndex: this.state.currentDisplayIndex > 0
                ? this.state.currentDisplayIndex - 1
                : this.state.currentDisplayIndex
        }))
    }
    addOnClick = () => {
        this.setState(() => ({
            currentDisplayIndex: this.state.currentDisplayIndex < texts.length
                ? this.state.currentDisplayIndex + 1
                : this.state.currentDisplayIndex
        }))
    }

    render() {
        const listTexts = texts.map((text, i) => {
            if (i === this.state.currentDisplayIndex) {
                return <Linia key={i} text={text} />
            }
        })

        return (
            <div>
                <Navigation onPrevButtonClick={() => this.substractOnClick()} onNextButtonClick={() => this.addOnClick()} />
                {listTexts}
            </div>
        );
    }
};

export default App;
