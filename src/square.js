import React, { Component } from 'react';


class Square extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: '',
            marked: false
            // possibly add property status? set to 'null' at first
            // this gets updated to 'complete' that prevents further clicks
            // NOTE: ICEBOX: alert that notifies player that they cant click anymore
        }
    }

    // TODO: disable any further action after one click


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

        // setting the players state to either X or O AND setting marked to true
        this.setState({players: newPlayer, marked: true})
        }
    }

    render() {
        return (
            <section className="Square" onClick={this.clicked}>
                {this.state.players}
            </section>
        );
    }
}

export default Square;
