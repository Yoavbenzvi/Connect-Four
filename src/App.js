import React from 'react';
import Column from './components/Column';
import Display from './components/Display';
import './App.css';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			winner: null,
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
		console.log(`winner is the ${winner} player!`)
		this.setState({
			winner: winner
		})
	}

	setColumn = (num, col) => {
		let arr = [...this.state.columns];
		arr[num] = col;
		this.setState({
			columns: arr
		})
	}

	checkWinnerVertical = () => {
		let arr = [...this.state.columns];
		arr.forEach(arr => {
			for(let i = 0; i < arr.length; i++) {
				if(arr[i] !== 'white' && arr[i] === arr[i+1] && arr[i] === arr[i+2] && arr[i] === arr[i+3]) {
					this.declareWinner(arr[i])
				}
			}		
		})
	}

	checkWinnerDiagonal = () => {
		const toRight = [[3,0],[2,1],[3,1],[1,0],[2,1],[3,2],[0,0],[1,1],[2,2],[0,1],[1,2],[0,2],[1,3],[2,0]];
		this.checkDiagRight(toRight);
		const toLeft = [[3,0],[4,0],[3,1],[5,0],[4,1],[3,2],[6,0],[5,1],[4,2],[6,1],[5,2],[6,2]];
		this.checkDiagLeft(toLeft);

	}

	checkDiagLeft = (sam) => {
		let arr = [...this.state.columns];
		sam.forEach(item => {
			if(arr[item[0]][item[1]] !== "white" && arr[item[0]][item[1]] === arr[item[0]-1][item[1]+1] && arr[item[0]][item[1]] === arr[item[0]-2][item[1]+2] && arr[item[0]][item[1]] === arr[item[0]-3][item[1]+3] ) {
				this.declareWinner(arr[item[0]][item[1]])
			}
		})
	}

	checkDiagRight = (sam) => {
		let arr = [...this.state.columns];
		sam.forEach(item => {
			if(arr[item[0]][item[1]] !== "white" && arr[item[0]][item[1]] === arr[item[0]+1][item[1]+1] && arr[item[0]][item[1]] === arr[item[0]+2][item[1]+2] && arr[item[0]][item[1]] === arr[item[0]+3][item[1]+3] ) {
				this.declareWinner(arr[item[0]][item[1]])
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
    	if(!this.state.winner) {
	    	this.checkWinnerHorizontal();
	    	this.checkWinnerDiagonal();
	    	this.checkWinnerVertical();
    	}
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
					setColumn={this.setColumn}
					x={x} 
					winner={() => this.state.winner}
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
					<Display setPlayer={this.setPlayer} />
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