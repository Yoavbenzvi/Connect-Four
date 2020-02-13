import React from 'react';
import './Display.css';

class Display extends React.Component {
	render() {

		const choosePlayer = (
			<div className="pick">
				<p>Choose first player:</p>
				<button onClick={() => this.props.setPlayer('red')}>
					Red
				</button>
				<button onClick={() => this.props.setPlayer('yellow')}>
					Yellow
				</button>
			</div>
		)

		const showTurn = (				
			<div>
				<p>Next move: {this.props.currentPlayer} <button onClick={() => this.props.reset()} >Reset Game</button> </p>
			</div>
		)

		const showWinner = (
			<div>
				<p>The winner is the {this.props.winner} player! <button onClick={() => this.props.reset()} >Reset Game</button></p>
			</div>
		)

		if(!this.props.currentPlayer && !this.props.winner) {
			return(
				<div>
					{choosePlayer}
				</div>	
			)
		} else if(this.props.currentPlayer && !this.props.winner) {
			return(
				<div>
					{showTurn}
				</div>
			)
		} else if(this.props.winner) {
			return(
				<div>
					{showWinner}
				</div>
			)
		}
	}	
}

export default Display;