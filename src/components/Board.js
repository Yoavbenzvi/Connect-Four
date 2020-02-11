import React from 'react';
import Tile from './Tile';
import './Board.css'

class Board extends React.Component {
	render() {

		let grid = [];

		for(let col = 1; col < 7; col++) {
			for(let row = 1; row < 8; row++) {
				grid.push(<Tile key={`${col},${row}`} x={row} y={col} />)
			}
		}

		return(
			<div className="board">
				{grid}
			</div>
		)
	}
}

export default Board;