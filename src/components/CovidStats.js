import React, { Component } from 'react'
import api from '..//utils/api'
import { Table } from 'reactstrap';
export default class CovidStats extends Component {
  state = {
    covidstatdata: [],
    
  }
  componentDidMount() {

    api.covidstatsFetch().then((data) => {
		this.setState({covidstatdata:data})
	});
  }
  
  render() {
    return (
      <div>
		<Table>
		<thead>
			<tr>
				<th>Cases</th>
				<th>Death</th>
				<th>Recovered</th>
				<th>Date Time</th>
			</tr>
		</thead>
		<tbody>
		{this.state.covidstatdata.map(d => (
			<tr key={d.id}><td>{d.totalcases}</td><td>{d.death}</td><td>{d.recovered}</td><td>{d.datetime}</td></tr>
		))} 
		</tbody>
		</Table>
		<p>Data source is collected from Worldometer</p>
      </div>
    )
  }
}

