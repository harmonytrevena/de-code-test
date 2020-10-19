import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState("");

    const _handleChange = text => {
        setInputText(text);
    };

    const _handleSend = () => {
        onSend(inputText);
        setInputText("");
    };

    return (
        <div>
            <input 
                type="text" 
                data-testid="messageText" 
                value={inputText} 
                onChange={(event) => _handleChange(event.target.value)}
            />
            <button 
                type="button" 
                data-testid="sendButton" 
                onClick={(_handleSend)}>
                    Send
            </button>
        </div>
    )
}

export default NewMessageForm;