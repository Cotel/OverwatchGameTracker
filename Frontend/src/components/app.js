import React, {Component} from 'react';
import GameList from './game-list';
import GameAdd from './game-add';
import Chart from './chart';

class App extends Component {
	
	render() {
		return (
			<div>
				<GameList />
				<div id="chart-container">
					<Chart />
				</div>					
				<GameAdd />
			</div>
		)		
	}
}

export default App;
