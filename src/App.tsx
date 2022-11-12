import React, { Component } from 'react';
import FlowContainer from './containers/FlowContainer';
import { ImageMapEditor} from './editors';



class App extends Component {
	
	render() {
		return (
			<div className="rde-main">
				
				
				<FlowContainer>
					<div className="rde-content"><ImageMapEditor /></div>
				</FlowContainer>
			</div>
		);
	}
}

export default App;
