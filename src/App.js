import React from 'react';
import './App.css';
import Board from './components/Board';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentPlayer: 'red',
			board: null,
		}
	}

	componentDidMount() {
		const newBoard = new Array(7).fill('0')

	}

	render() {
		return(
			<div className="app">
				<div>
					<Board board={this.state.board}/>
				</div>
			</div>
		)
	}
}

export default App;