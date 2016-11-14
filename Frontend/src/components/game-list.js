import React, {Component} from 'react';
import {showGames, selectGame} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';

class GameList extends Component {

    componentWillMount(){
		this.props.showGames();
	}

	renderGameList() {
		return this.props.games.map((game) => {
			return (
				<li><a href="#" key={game.id} onClick={() => this.props.selectGame(game)}>{game.map}</a></li>
			)
		})
	}

	renderActiveGame() {
		if(this.props.activeGame) {
			const resDate = moment(this.props.activeGame.date)
			if(this.props.activeGame.winned) {
				return (
					<div className="bg-success">
						<strong>{this.props.activeGame.map}</strong>
						<p>Date: {resDate.format("DD-MM-YYYY HH:mm")}</p>
						<p>Winned</p>
					</div>
				)
			} else {
				return (
					<div className="bg-danger">
						<strong>{this.props.activeGame.map}</strong>
						<p>Date: {resDate.format("DD-MM-YYYY HH:mm")}</p>
						<p>Lost</p>
					</div>
				)
			}
		} else {
			return (
				<div></div>
			)
		}
	}

    render() {
        return (
			<div>
				<div>
					<h2>Game List</h2>
					<ul>{this.renderGameList()}</ul>
				</div>
				<div>
					<h2>Game details</h2>
					<div>{this.renderActiveGame()}</div>
				</div>
			</div>
        )
    }

}

function mapStateToProps(state) {
    return {
        games: state.game.list,
		activeGame: state.game.activeGame,
		chartData: state.chart.chartData
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectGame: selectGame,
		showGames: showGames,
	}, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(GameList)