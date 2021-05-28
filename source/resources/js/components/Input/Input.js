import React from "react";

import './input.css'

const Input = () => (
    <form action="" className="form">
        <input
            type="text"
            className="input"
            placeholder="Type a message"
        />
        <button
            className="sendButton"
            onClick={(event) => {
                event.preventDefault();
                console.log('button was send')
            }}
        >Send
        </button>
    </form>
)
export default Input;
