import React from 'react';
import Tile from './Tile';
import './Board.css'

class Board extends React.Component {
	render() {
		return(
			<div className="board">
				<div className="column-1">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="column-2">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="column-3">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="column-4">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="column-5">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="column-6">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="column-7">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
			</div>
		)
	}
}

export default Board;