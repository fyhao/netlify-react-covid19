import React, { Component } from 'react'
import analytics from './utils/analytics'
import api from './utils/api'
import './App.css'

export default class App extends Component {
  state = {
    todos: [],
    
  }
  componentDidMount() {

    /* Track a page view */
    analytics.page()

    api.readAll().then((todos) => {
		alert(1);
		this.setState({todos:{date:new Date().toString()}});
	});
  }
  
  render() {
    return (
      <div className='app'>
		<p>Test App 1</p>
		<p>{this.state.todos.date}</p>
      </div>
    )
  }
}

