import React, { Component } from 'react'
import analytics from '..//utils/analytics'
import api from '..//utils/api'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table } from 'reactstrap';
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
			</tr>
		</thead>
		<tbody>
		{this.state.covidstatdata.map(d => (
			<tr key={d.id}><td>{d.cases}</td><td>{d.death}</td><td>{d.recovered}</td></tr>
		))} 
		</tbody>
		</Table>
      </div>
    )
  }
}

