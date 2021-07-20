import React, { Component } from 'react'
import './VideoList.css';
import VideoCard from './VideoCard';
export default class VideoList extends Component {
  state = {
    videoList: []    
  }
  componentDidMount() {
	var id = 0;
	var videoList = this.state.videoList;
    videoList.push({id:++id,title:'Coronavirus disease (COVID-19) 1',url:'https://www.youtube.com/embed/i0ZabxXmH4Y'});
	videoList.push({id:++id,title:'Coronavirus disease (COVID-19) 2',url:'https://www.youtube.com/embed/i0ZabxXmH4Y'});
	this.setState({videoList:videoList});
  }
  
  render() {
    return (
      <div class="video-list">
		
	  {this.state.videoList.map(d => (
	    <VideoCard key={d.id} item={d}></VideoCard>
	  ))} 
      </div>
    )
  }
}

