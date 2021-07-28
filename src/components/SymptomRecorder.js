import React, { Component } from 'react'
import api from '..//utils/api'
export default class SymptomRecorder extends Component {
  state = {
    listdata: [],
    text:''
  }
  constructor(props: any) {
    super(props);
	this.fetchrecords = this.fetchrecords.bind(this);
	this.addSymptomRecord = this.addSymptomRecord.bind(this);
	this.handleTextChange = this.handleTextChange.bind(this);
  }
  componentDidMount() {
	this.fetchrecords();
  }
  fetchrecords() {
	  
    api.symptomrecordsfetch().then((data) => {
		this.setState({listdata:data})
	});
  }
  addSymptomRecord() {
	  api.symptomrecordsadd({text:this.state.text,datetime:new Date().toString()}).then((data) => {
		  this.fetchrecords();
	  });
	  this.setState({text:''});
  }
  handleTextChange(e) {
	  this.setState({text:e.target.value});
  }
  
  render() {
    return (
      <div>
	    <div>
			Text: <input type="text" value={this.state.text} onChange={this.handleTextChange} />
			<button onClick={this.addSymptomRecord}>Add</button>
		</div>
		<ul>
		{this.state.listdata.map(d => (
			<li key={d.id}>{d.text} - {d.datetime}</li>
		))} 
		</ul>
      </div>
    )
  }
}

