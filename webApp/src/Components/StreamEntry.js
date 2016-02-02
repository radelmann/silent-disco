import React from 'react';
import ListItem from '../../node_modules/material-ui/lib/lists/list-item';
import Avatar from '../../node_modules/material-ui/lib/avatar';
import PlayCircleOutline from 'material-ui/lib/svg-icons/av/play-circle-outline';

class StreamEntry extends React.Component {
  render() {
    return (
        <ListItem 
          onClick={this.props.goToStream.bind(this)}
          primaryText={this.props.details.name}
          leftAvatar={<Avatar src={this.props.details.image} />}
          rightIcon={<PlayCircleOutline />}
        />
    )
  }
}

export default StreamEntry;