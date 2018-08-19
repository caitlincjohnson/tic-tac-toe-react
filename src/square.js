import React, { Component } from 'react';
import sword from './sounds/sword.wav';
import duck from './sounds/duck.wav';
import kiss from './sounds/kiss.wav';
import pig from './sounds/pig.wav';
import monkey from './sounds/monkey.wav';
import woop from './sounds/woop.wav';
import sparkle from './sounds/sparkle.wav';
import fart from './sounds/fart.wav';
import horse from './sounds/horse.wav';

class Square extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: '',
            marked: false,
            unicorn: true,
            sounds: [new Audio(sword), new Audio(duck), new Audio(kiss), new Audio(pig), new Audio(monkey), new Audio(woop), new Audio(sparkle), new Audio(fart), new Audio(horse)],
            sound: ''
        }
    }

    soundRandomizer (){
        var randomSound;
        var soundsIndex;
        for (let i = 0; i < this.state.sounds.length; i++) {
            soundsIndex = Math.floor(Math.random()*this.state.sounds.length)
        }
        randomSound = this.state.sounds[soundsIndex]
        randomSound.play();
    }

    // listens for click
    clicked = (e) => {

        // deconstruct state of this box into variables
        let { marked } = this.state

        // check the status first to see if it equals 'marked'
        if ( marked === true ){

            //return alert stating that they can't change the value
            alert("You can't do that!!!")

        // if marked is false, carry out the following functions
        } else {

        // TODO: deconstruct props into separate variables for id, players

        // receive changeTurn function in order to fire it on parent app
        this.props.updateArr(this.props.id)

        this.props.changeTurn()

        let newPlayer = this.props.players

        this.soundRandomizer();
        // setting the players state to either X or O AND setting marked to true
        this.setState({players: newPlayer, marked: true, unicorn: false})
        }
    }

    render() {
        let square_class = this.state.unicorn ? "section" : "section-change";
        return (
            <div className={square_class} onClick={this.clicked}>
                {this.state.players}
            </div>
        );
    }
}

export default Square;
