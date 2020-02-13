import React from 'react';
import Column from './components/Column';
import Display from './components/Display';
import './App.css';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentPlayer: null,
			board: null,
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

	setColumn = (num, col) => {
		let arr = [...this.state.columns];
		arr[num] = col;
		this.setState({
			columns: arr
		})
	}

	//change 1/2
	checkWinnerDiagonal = () => {
		let arr = [...this.state.columns]
		let test = [[3, 0], [2, 1]];
		this.checkDiagonalRight(test, arr)
	}

	checkDiagonalRight = (test, arr) => {
		test.forEach(item => {
			for(x = 0; x < 4; x++) {
				if (arr[item[0+x]][item[1+x]] === 'red') {
					console.log('working')
				}
			}
		})
	}

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
    	//change 2/2
    	this.checkWinnerDiagonal();
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