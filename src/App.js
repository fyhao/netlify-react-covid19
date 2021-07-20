import React, { Component } from 'react'
import analytics from './utils/analytics'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CovidStats from './components/CovidStats';
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
		<CovidStats></CovidStats>
      </div>
    )
  }
}

