import React, {Component} from 'react';
import {showGames} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Panel, Table, Glyphicon} from 'react-bootstrap';
import moment from 'moment';

class GameList extends Component {

    componentWillMount(){
		this.props.showGames();
	}

	renderGameList() {
		return this.props.games.map((game) => {
			if(game.winned) {
				return (
					<tr key={game.id}>
						<th>{game.map}</th>
						<th>{moment(game.date).format("DD-MM-YYYY")}</th>
						<th>{moment(game.date).format("HH:mm")}</th>
						<th><Glyphicon glyph="ok" /></th>
					</tr>
				)
			} else {
				return (
					<tr key={game.id}>
						<th>{game.map}</th>
						<th>{moment(game.date).format("DD-MM-YYYY")}</th>
						<th>{moment(game.date).format("HH:mm")}</th>
						<th><Glyphicon glyph="remove" /></th>
					</tr>
				)
			}
		})
	}

    render() {
        return (
			<div>
				<Panel header={<h3>Recent Games</h3>} id="game-list">
					<Table responsive id="game-list-table">
						<thead>
							<tr>
								<th>Map</th>
								<th>Date</th>
								<th>Time</th>
								<th>Winned</th>
							</tr>
						</thead>
						<tbody>
							{this.renderGameList()}
						</tbody>
					</Table>					
				</Panel>
			</div>
        )
    }

}

function mapStateToProps(state) {
    return {
        games: state.game.list.slice(1).slice(-5)
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		showGames: showGames
	}, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(GameList)