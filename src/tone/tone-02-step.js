import React from "react";
import { Sampler } from "tone";
import A1 from "../assets/A1.mp3";
// import A1 from "../assets/hihat.mp3";
// import A1 from "../assets/zedd.m4a";

export default class ToneTestOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoaded: false };
        this.handleClick = this.handleClick.bind(this);

        this.sampler = new Sampler(
            { A1 },
            {
                onload: () => {
                    this.setState({ isLoaded: true });
                }
            }
        ).toMaster();
    }

    handleClick() {
        this.sampler.triggerAttack("A1");
    }

    /* cut.n.paste 
    
    const keys = new Tone.Players({
			urls: {
				0: "A1.mp3",
				1: "Cs2.mp3",
				2: "E2.mp3",
				3: "Fs2.mp3",
			},
			fadeOut: "64n",
			baseUrl: "https://tonejs.github.io/audio/casio/"
		}).toDestination();

		document.querySelector("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
		document.querySelector("tone-play-toggle").addEventListener("stop", () => Tone.Transport.stop());
		document.querySelector("tone-slider").addEventListener("input", (e) => Tone.Transport.bpm.value = parseFloat(e.target.value));
		document.querySelector("tone-step-sequencer").addEventListener("trigger", ({ detail }) => {
			keys.player(detail.row).start(detail.time, 0, "16t");
		});
    
    
    
    
    
    
    
    */



    render() {
        const { isLoaded } = this.state;
        return (
            <tone-example label="Step Sequencer">
                <tone-loader></tone-loader>
                <div slot="explanation">
                    <a href="https://tonejs.github.io/docs/Transport">Tone.Transport</a> 
                    is the application-wide timekeeper. It's clock source enables sample-accurate scheduling as well as tempo-curves and automation. This example uses Tone.Sequence to invoke a callback every 16th note.
		        </div>

                <div id="content">
                    <tone-play-toggle></tone-play-toggle>
                    <tone-slider label="tempo" units="bpm" min="60" max="240" value="120"></tone-slider>
                    <tone-step-sequencer></tone-step-sequencer>
                </div>
            </tone-example>
        );
    }
}