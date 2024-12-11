// Messages.jsx
import React from 'react';
import MessageHistory from './MessageHistory';
import MessageInput from './MessageInput';

const styles = {
  backgroundColor:'white',
  height: '100%',
}

const Messages = ({ messages, onSendMessage }) => {
  return (
    <div className="mesgs" style={styles}>
      <MessageHistory messages={messages} />
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};

export default Messages;