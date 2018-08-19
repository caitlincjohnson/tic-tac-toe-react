import React, { Component } from 'react';

class Soundfx extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sounds: ["./sounds/sword.wav", "./sounds/duck.wav"],
            sound: ''
        }
    }


    soundRandomizer = () => {

        for (let i = 0; i < this.state.sounds.length; i++) {
            let soundsIndex = Math.floor(Math.random()*this.state.sounds.length-1)
            randomSound = this.state.sounds[soundsIndex]
        }
        this.setState({sound: randomSound})

    }

    render() {

        return (
            <div className="SoundFX" onClick={this.soundRandomizer}>
                {this.state.sound}
            </div>
        );
    }

export default Soundfx;
