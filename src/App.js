import React, { Component } from 'react'
import analytics from './utils/analytics'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CovidStats from './components/CovidStats';
import CovidSummary from './components/CovidSummary';
import VideoList from './components/VideoList';
export default class App extends Component {
  state = {
    
  }
  componentDidMount() {

    /* Track a page view */
    analytics.page()
   
  }
  
  render() {
    return (
      <div className='app'>
		<table>
			<tr>
				<td colspan="2">
					<CovidSummary></CovidSummary>
				</td>
			</tr>
			<tr>
				<td valign="top">
					<VideoList></VideoList>
				</td>
				<td>
					<CovidStats></CovidStats>
				</td>
			</tr>
		</table>
		
		
		
      </div>
    )
  }
}

