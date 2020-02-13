import React from 'react';

class Tile extends React.Component {
	render() {
		return(
			<div className="tile" style={{background: this.props.color}}>
			</div>
		)
	}
}

export default Tile;