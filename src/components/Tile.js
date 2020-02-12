import React from 'react';
import './Tile.css';

class Tile extends React.Component {
	render() {
		return(
			<div className="tile" style={{background: this.props.color}}>
				<p> {this.props.x},{this.props.y} </p>
			</div>
		)
	}
}

export default Tile;