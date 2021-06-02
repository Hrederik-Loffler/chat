import React, {useState, useEffect} from "react";

import './input.css'
import axios from "axios";
import Echo from "laravel-echo";
import Socketio from "socket.io-client";


// const Input = ({ message, setMessage, sendMessage }) =>
const Input = ({ messages, setMessages }) => {

    const [message, setMessage] = useState('')

    const options = {
        message
    }

    const sendMessage = (options) => {
        let res = axios.post('/messages', options).then((response) => {
            // messages.push(message)
            // setMessages(messages)
        })
    }

    const handleMessageSubmit = async (e) => {
        e.preventDefault()
        const res = await sendMessage(options)
        messages.push(message)
        setMessages(messages)
        setMessage('')
    }

    return (
        <form className="form" onSubmit={handleMessageSubmit}>
            <input
                name="message"
                type="text"
                className="input"
                placeholder="Type a message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}

            />
            <button
                className="sendButton"
                type="submit"
            >
                Send
            </button>
        </form>
    )
}
export default Input;
