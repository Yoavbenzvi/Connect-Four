import React from 'react';

class Display extends React.Component {
	render() {
		return(
			<div>
				<p>Choose First Player:</p>
				<button onClick={() => this.props.setPlayer('red')}>
					Red
				</button>
				<button onClick={() => this.props.setPlayer('yellow')}>
					Yellow
				</button>
			</div>
		)
	}	
}

export default Display;