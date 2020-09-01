import React from 'react';
import './App.css';

// import StepSequencer from './MDN02-step-sequencer/MDN-machine';
// import './MDN02-step-sequencer/MDN-machine.css'

import ToneTestOne from './tone/tone-01';
import ToneTestTwo from './tone/tone-02-step';
import Sequencer from './tone/tone-03-stepSeq-01-hooks';


export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                Hello.

                <ToneTestOne />

                <ToneTestTwo />

                <Sequencer />
                
            </div>
        );
    }
}
