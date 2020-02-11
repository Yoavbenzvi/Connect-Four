import React from 'react';
import './App.css';
import Board from './components/Board';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
		}
	}

	render() {
		return(
			<div className="app">
				<div className="top-part">
				</div>
				<div className="bottom-part">
					<Board />
				</div>
			</div>
		)
	}
}

export default App;