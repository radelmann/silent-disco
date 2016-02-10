import React from 'react';



class BroadcastAudioPlayer extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.refs.soundcloudPlayer.addEventListener('ended', this.props.handleMediaEnd.bind(this))
  }
  
  render() {
    return (
      <audio 
        autoPlay 
        crossOrigin="anonymous" 
        ref="soundcloudPlayer" 
        id="soundcloudPlayer" 
        src={this.props.src} 
        controls >
      </audio>
    )
  }
}

var styles = {
  
}

export default BroadcastAudioPlayer;

// <audio 
//   autoPlay 
//   crossOrigin="anonymous" 
//   ref="soundcloudPlayer" 
//   id="soundcloudPlayer" 
//   src={this.state.currentSong.stream_url + '?client_id=' + SC_Client.clientID } 
//   controls >
// </audio> 