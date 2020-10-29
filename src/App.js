import React, { useState } from 'react';
import Gratitude from './components/Gratitude';

function App() {
  const [messages, setMessages] = useState([]);

  const _handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div className="App">
      <Gratitude onSend={_handleSend}/>
    </div>
  );
}

export default App;
