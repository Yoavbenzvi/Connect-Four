import React from 'react';
import './Tile.css';

const Tile = ({ x, y}) => {

	return(
		<div className="circle">
			<p> {x},{y} </p>
		</div>
	)
}

export default Tile;