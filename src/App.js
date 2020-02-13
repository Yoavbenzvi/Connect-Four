import React from 'react';
import Column from './components/Column';
import Display from './components/Display';
import './App.css';

//make sure to stop switch if end of row

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentPlayer: null,
			board: null,
			//change 1/4
			columns: [
				['white', 'white', 'white', 'white', 'white', 'white'],
				['white', 'white', 'white', 'white', 'white', 'white'],
				['white', 'white', 'white', 'white', 'white', 'white'],
				['white', 'white', 'white', 'white', 'white', 'white'],
				['white', 'white', 'white', 'white', 'white', 'white'],
				['white', 'white', 'white', 'white', 'white', 'white'],
				['white', 'white', 'white', 'white', 'white', 'white'],
			]
		}
	}

	declareWinner = (winner) => {
		window.alert(`winner is the ${winner} player!`)
	}

	//change 2/4 //setting the colum state
	setColumn = (num, col) => {
		let arr = [...this.state.columns];
		arr[num] = col;
		this.setState({
			columns: arr
		})
	}

	//change 4/4
	checkWinnerHorizontal = () => {
    	let arr = [...this.state.columns]
    	for(let x = 0; x < 4; x++) {
    		for(let y = 0; y < 6; y++) {
	    		if(arr[x][y] !== 'white' && arr[x][y] === arr[x+1][y] && arr[x][y] === arr[x+2][y] && arr[x][y] === arr[x+3][y]) {
	    			this.declareWinner(arr[x][y])
	    		}
    		}
    	}
    }

    componentDidUpdate() {
    	this.checkWinnerHorizontal();
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
					//change 3/4
					setColumn={this.setColumn}
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