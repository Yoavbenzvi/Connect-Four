import React from 'react';
import './Board.css'

class Board extends React.Component {
	render() {

		return(
			<div className="board">
				{this.props.board}
			</div>
		)
	}
}

export default Board;