import React, { Component } from 'react'
import api from '..//utils/api'
import './CovidSummary.css';
export default class CovidSummary extends Component {
  state = {
    summary: {}    
  }
  componentDidMount() {
    api.covidSummaryFetch().then((data) => {
		this.setState({summary:data})
	});
  }
  
  render() {
    return (
      <div class="covid-summary">
		<p>
			<span class="covid-summary-label">Total cases</span>
			<span class="covid-summary-main">{this.state.summary.totalcases}</span>
			<span class="covid-summary-sub">{this.state.summary.totalcases_dailychange}</span>
			<span class="covid-summary-label">Death</span>
			<span class="covid-summary-main">{this.state.summary.death}</span>
			<span class="covid-summary-sub">{this.state.summary.death_dailychange}</span>
			<span class="covid-summary-label">Recovered</span>
			<span class="covid-summary-main">{this.state.summary.recovered}</span>
			<span class="covid-summary-sub">{this.state.summary.recovered_dailychange}</span>
		</p>
      </div>
    )
  }
}

