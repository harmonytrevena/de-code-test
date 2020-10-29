import React, { useState } from 'react';

const Gratitude = ({ onSend }) => {
  const [input, setInput] = useState('');

  const _handleChange = item => {
    setInput(item);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    onSend(input)
    setInput('');
  };

  return (
      <>
        <div>
          <h1>Practice Gratitude.</h1>
            <div>
                <form onSubmit={e => _handleSubmit(e)}>
                    <input 
                        data-testid="messageText" 
                        type="text" 
                        name="newItem" 
                        placeholder="type here" 
                        value={input}
                        onChange={(event) => _handleChange(event.target.value)}
                    />
                    <button type="submit" data-testid="sendButton">Practice Gratitude</button>
                </form>
            </div>
        </div>
      </>
  );
};

export default Gratitude;