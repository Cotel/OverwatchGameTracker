import React, {Component} from 'react';
import {addGame, getChartData} from '../actions';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormGroup, ControlLabel, FormControl, Col, Button, Form, Panel} from 'react-bootstrap'

class GameAdd extends Component {

	maps = ["Numbani", "Dorado", "Anubis", "Eichenwalde", "LiJiang", "Nepal", "Route66",
				"Gibraltar", "Hollywood", "Hanamura", "Volskaya", "Illios", "Kingsrow"];

	hasError(touched, error) {
		if(touched) {
			if(error) return "error"
			else return "success"
		}
	}

	handleSubmit(values) {
		this.props.addGame(values);
	}

	renderField = ({input, label, id, type, meta: {touched, error}}) => {
		if(type != "select") {
			return (
				<FormGroup validationState={this.hasError(touched, error)}>
					<Col componentClass={ControlLabel} sm={2}>{label}</Col>
					<Col sm={10}>
						<FormControl {...input} placeholder={label} type={type}/>
					</Col>
				</FormGroup>
			)
		} else {
			return (
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>{label}</Col>
					<Col sm={10}>
						<FormControl componentClass={type} {...input} placeholder={label} type={type}>
							{this.renderSelect()}
						</FormControl>
					</Col>
				</FormGroup>
			)
		}
	} 

	renderSelect() {
		return this.maps.map((map) => {
			return (
				<option value={map.toUpperCase()}>{map}</option>
			)
		})
	}

	render() {
		const {handleSubmit} = this.props;
		return (
			<Panel header={<h3>Add Game</h3>}>
				<Form horizontal onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
					<Field name="map" id="mapInput" type="select" label="Map" component={this.renderField} />
					<Field type="input" id="dateInput" type="datetime-local" name="date" label="Date" component={this.renderField} />
					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Field type="checkbox" component="input" name="winned" /> Winned
						</Col>
					</FormGroup>
					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button bsStyle="primary" type="submit">Submit</Button>
						</Col>
					</FormGroup>
				</Form>
			</Panel>
		)
	}
}

const validateSubmit = values => {
	const errors = {}
	if(!values.date) {
		errors.date = "Required"
	}
	return errors
}

const form = reduxForm({
	form: 'GameAdd',
	validate: validateSubmit
});

function mapStateToProps(state) {
	return {
		games: state.game.list
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getChartData: getChartData,
		addGame: addGame
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(form(GameAdd));
