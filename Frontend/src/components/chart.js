import React, {Component} from 'react';
import {getChartData} from '../actions';
import {BarChart, XAxis, YAxis, Legend, CartesianGrid, Tooltip, Bar, ReferenceLine, ResponsiveContainer} from 'recharts'
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';

class Chart extends Component {
    componentWillMount() {
        this.props.getChartData();
    }

    render() {
        return (
            <Panel header={<h3>Balance</h3>}>            
                <ResponsiveContainer>
                <BarChart height={440} data={this.props.chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <ReferenceLine y={0} stroke="black" />
                    <Bar dataKey="balance" fill="#FAA02E" />
                </BarChart>
                </ResponsiveContainer>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        chartData: state.chart.chartData
    }
}

export default connect(mapStateToProps, {getChartData})(Chart);