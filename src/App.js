import React from 'react';
import Column from './components/Column';
import Display from './components/Display';
import './App.css';

// add alternating colors
//make sure to stop switch if end of row
//add checkwinner function
//add display

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentPlayer: null,
			board: null,
			//change 1/2
			columns: {
				0: null,
				1: null,
				2: null,
				3: null,
				4: null,
				5: null,
			}
		}
	}

	declareWinner = (winner) => {
		window.alert(`winner is the ${winner} player!`)
	}

	//change 2/2
	setColumn = (num, col) => {
		let arr = [...this.state.columns.num]
		this.setState({
			columns: {
				[num]: col
			}
		})
	}

	changePlayer = () => {
        this.state.currentPlayer === 'red' ?
            this.setState({
                currentPlayer: 'yellow'
            }) :
            this.setState({
                currentPlayer: 'red'
            })
    }

    setPlayer = (player) => {
    	if(this.state.currentPlayer === null) {
	    	this.setState({
	    		currentPlayer: player
	    	})
	    }
    }

	componentDidMount() {
		let newBoard = [];
		for(let x = 0; x < 7; x++) {
			newBoard.push(
				<Column 
					key={`column ${x}`} 
					currentPlayer={() => this.state.currentPlayer} 
					changePlayer={this.changePlayer}
					declareWinner={this.declareWinner}
					x={x} 
				/>)
		}

		this.setState({
			board: newBoard,
		})
	}

	render() {
		return(
			<div className="app">
				<div className="display">
					{this.state.currentPlayer === null ? <Display setPlayer={this.setPlayer} /> : ""}
				</div>
				<div className="container">
					<div className="board">
						{this.state.board}
					</div>
				</div>
			</div>
		)
	}
}

export default App;