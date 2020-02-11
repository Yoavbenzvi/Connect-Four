import React from 'react';
import './App.css';
import Board from './components/Board';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentPlayer: 'red',
			board: [
				[], //0 c
				[], //1 c
				[], //2 c
				[], //3 c
				[], //4 c
				[], //5 c
				[] //6 c
			]
		}
	}

	render() {
		return(
			<div className="app">
				<div className="bottom-part">
					<Board />
				</div>
			</div>
		)
	}
}

export default App;