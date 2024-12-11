// Messaging.jsx
import React from 'react';

const styles = {
  backgroundColor:'white',
  height: '100%',
}

const Messaging = ({ children }) => {
  return <div className="container"><div className="messaging"  style={styles} >{children}</div></div>;
};

export default Messaging;