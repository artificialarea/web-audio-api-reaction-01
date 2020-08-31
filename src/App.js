import React from 'react';
import './App.css';

// import StepSequencer from './MDN02-step-sequencer/MDN-machine';
// import './MDN02-step-sequencer/MDN-machine.css'

import ToneOne from './tone/tone-01';

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                Hello.

                <ToneOne />
                
            </div>
        );
    }
}
