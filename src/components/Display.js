import React from 'react';
import './Display.css';

class Display extends React.Component {
	render() {
		return(
			<div className="disp">
				<p>Choose first player:</p>
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