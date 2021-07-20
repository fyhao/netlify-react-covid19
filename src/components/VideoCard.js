import React, { Component } from 'react'
import api from '..//utils/api'
import './VideoList.css';
import { Badge, Button } from 'reactstrap';
export default class VideoCard extends Component {
  state = {
    
  }
  componentDidMount() {
	
  }
  
  render() {
	var vidurl = this.props.item.url;
    return (
      <div class="video-card">
	    <iframe width="120" height="120" src={vidurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<p>{this.props.item.title}</p>
      </div>
    )
  }
}

