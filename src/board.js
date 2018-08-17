import React, { Component } from 'react';
import Square from './square'
import './board.css'

// NOTE: ICEBOXED:
    // Add a function that makes the winner's emoji rain down?

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            squaresArr: ["", "", "", "", "", "", "", "", ""],
            players: ["", ""],
            arrayOfEmojis: ["🤔", "🍳","🍑", "🍆", "🍦", "💊", "👽", "💩", "😏", "💅🏼", "👼🏿", "🦄", "🐒", "💨 ", "🐉", "💃🏻", "🎅🏿", "😘", "🤬", "🍄", "🚬 ", "🌚", "🐣", "🙅🏼‍", "🙄", "👺", "😲", "🍺", "🕴🏼", "🗿", "🛸", "💣", "🍣", "🦖", "🧘‍", "🔮", "🔪", "🚫", "🇰🇷", "🏋🏻‍", "🐙", "🤙🏾"],
            turn: 0,
            initializer: false
        }
    }

    changeTurn = () => {
        let turn = this.state.turn
        if(turn === 0) {
            this.setState({turn: 1})
        }
        else {
            this.setState({turn: 0})
        }
    }

    // TODO: add a rule that prevents the same randomNumber from being generated twice

    randomizer = () => {
        if(!this.state.initializer){
            var playerEmojis = ["",""]
            for (var i = 0; i < playerEmojis.length; i++) {
                var randomNumber = Math.floor(Math.random()*this.state.arrayOfEmojis.length-1)+1
                playerEmojis[i] = this.state.arrayOfEmojis[randomNumber]
            }
            this.setState({players: playerEmojis, initializer: true})
        }
    }

    updateArr = (id) => {
        //declare new variable
        let playerId
        // modify the variable
        playerId = this.state.players[this.state.turn]
        //setState with new variable
        this.state.squaresArr[id] = playerId
    }

    checkWinner = () => {

    let { squaresArr } = this.state

        // Horizontal check
        for(let i = 0; i < 9; i +=3) {
            if(squaresArr[i] != "") {
                if(squaresArr[i] === squaresArr[i+1] && squaresArr[i+1] === squaresArr[i+2]) {
                    return alert("Player " + squaresArr[i] + " Won Horizontally!")
                }
            }
        }
        // Vertical check
        for(let i = 0; i < 3; i ++) {
            if(squaresArr[i] != "") {
                if(squaresArr[i] === squaresArr[i+3] && squaresArr[i+3] === squaresArr[i+6]) {
                    return alert("Player " + squaresArr[i] + " Won Vertically!")
                }
            }
        }
        // Diagonal check
        if(squaresArr[4] != "") {
            if(squaresArr[0] === squaresArr[4] && squaresArr[4] === squaresArr[8]) {
                return alert("Player " + squaresArr[4] + " Won Diagonally!")
            } else if (squaresArr[2] === squaresArr[4] && squaresArr[4] === squaresArr[6]) {
                return alert("Player " + squaresArr[4] + " Won Diagonally!")
            }
        }
        return false
    }

    checkCatsGame = () => {

        let { squaresArr } = this.state
        var nullCounter = 0

        for(let i = 0; i < squaresArr.length; i++) {
            if(squaresArr[i] === "") {
                nullCounter++
            }
        }
        if(nullCounter === 0) {
            alert("It's a cat's game!")
        }
    }

    // TODO: a function that returns board array to null/resets the game

    render() {

        this.randomizer()
        this.checkWinner()
        this.checkCatsGame()

        let { squaresArr, players, turn } = this.state

        let squares = this.state.squaresArr.map((square, index) => {
            return (
                <Square key= {index} id={index} players={players[turn]} changeTurn={this.changeTurn} updateArr = {this.updateArr}/>
            )
        })

        return (
            // TODO: add a reset button

            <main className="box">
                {squares}
            </main>
        );
    }
}

export default Board;
