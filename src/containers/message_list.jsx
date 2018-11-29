import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div className="messages">
        {
          this.props.messages.map((message) => {
            return (<Message message={message} key={message.created_at} />);
          })
        }
      </div>
    );
  }
}

export default MessageList;
