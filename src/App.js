import React, { Component } from 'react'
import analytics from './utils/analytics'
import api from './utils/api'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
export default class App extends Component {
  state = {
    todos: {},
    
  }
  componentDidMount() {

    /* Track a page view */
    analytics.page()
	this.setState({todos:{date:'a'}});
    api.readAll().then((todos) => {
		this.setState({todos:todos})
	});
  }
  
  render() {
    return (
      <div className='app'>
		<p>Test App 1</p>
		<p>{this.state.todos.date}</p>
		<Button>React Bootstrap</Button>
      </div>
    )
  }
}

