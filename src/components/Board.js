import React from 'react';
import Tile from './Tile';
import './Board.css'

class Board extends React.Component {
	render() {

		const board = new Array(42).fill(
			<Tile 
				
			/>)

		return(
			<div className="board">
				{board}
			</div>
		)
	}
}

export default Board;