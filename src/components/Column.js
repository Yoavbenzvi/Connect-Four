import React from 'react';
import './Column.css';
import Tile from './Tile';

class Column extends React.Component {
	constructor() {
		super()

		this.state = {
			colors: ['white', 'white', 'white', 'white', 'white', 'white']
		}
	}

	componentDidUpdate() {
		this.checkWinnerVertical()
		this.props.setColumn(this.props.x ,this.state.colors)
	}

	checkWinnerVertical = () => {
		let arr = [...this.state.colors];
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] !== 'white' && arr[i] === arr[i+1] && arr[i] === arr[i+2] && arr[i] === arr[i+3]) {
				this.props.declareWinner(arr[i])
			}
		}
	}

	handleClick = () => {
		if(this.props.currentPlayer() !== null && this.state.colors[5] === 'white') {
			for(let i = 0; i < 6; i++) {
				if(this.state.colors[i] === 'white') {
					let newColors = [...this.state.colors];
					newColors[i] = this.props.currentPlayer();
					this.setState({
						colors: newColors
					})
					break;
				}
			}
			this.props.changePlayer();
		}
	}

	render() {
		let column = [];
		for(let y = 5; y >= 0; y--) {
			column.push(<Tile 
				key={`${this.props.x},${y}`} 
				x={this.props.x} 
				y={y} 
				color={this.state.colors[y]}
			/>)
		}

		return(
			<div className="column" onClick={() => this.handleClick()}>
				{column}
			</div>
		)
	}
}

export default Column;