import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        {this.props.message.author} - {this.props.message.created_at}
        {this.props.message.content}
      </div>
    );
  }
}

export default Message;
