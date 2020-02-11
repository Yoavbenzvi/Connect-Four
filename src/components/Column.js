import React from 'react';
import './Column.css';
import Tile from './Tile';


//get an x prop from parent on render
class Column extends React.Component {

	//calling a callback function to rerender the columns
	handleClick = () => {
		console.log(`clicked on row ${this.props.x}`);
		this.props.changeColumn(this.props.x);
	}

	render() {
		//creating the column and defining y axis
		let column = [];
		for(let y = 5; y >= 0; y--) {
			column.push(<Tile key={`${this.props.x},${y}`} x={this.props.x} y={y} />)
		}

		return(
			<div className="column" onClick={() => this.handleClick()}>
				{column}
			</div>
		)
	}
}

export default Column;