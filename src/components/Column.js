import React from 'react';
import './Column.css';
import Tile from './Tile';

//recieves the currentPlayer prop
//get an x prop from parent on render
class Column extends React.Component {
	constructor() {
		super()

		this.state = {
			colors: ['white', 'white', 'white', 'white', 'white', 'white']
		}
	}


	//calling a function to rerender the columns
	handleClick = () => {
		console.log(`clicked on row ${this.props.x}`);

		for(let i = 0; i < 6; i++) {
			if(this.state.colors[i] === 'white') {
				let newColors = this.state.colors;
				newColors[i] = this.props.currentPlayer;
				this.setState({
					colors: newColors
				})
				break;
			}
		}
	}

	render() {
		//creating the column and defining y axis
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