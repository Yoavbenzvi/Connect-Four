import React from 'react';
import Column from './components/Column';
import './App.css';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			//initializing first player
			currentPlayer: 'red',
			//initializing board state before componentDidMount
			board: null,
		}
	}

	//creating columns and defining x axis; defining board state
	componentDidMount() {
		let newBoard = [];
		for(let x = 0; x < 7; x++) {
			newBoard.push(<Column key={`column ${x}`} currentPlayer={this.state.currentPlayer} x={x} />)
		}

		this.setState({
			board: newBoard,
		})
	}

	render() {
		return(
			<div className="app">
				<div className="board">
					{this.state.board}
				</div>
			</div>
		)
	}
}

export default App;