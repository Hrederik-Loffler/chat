import React, {useState, useEffect} from "react";

import './input.css'
import axios from "axios";
import Echo from "laravel-echo";
import Socketio from "socket.io-client";
// import {response} from "express";

// const Input = ({ message, setMessage, sendMessage }) => (
//     <form className="form">
//         <input
//             type="text"
//             className="input"
//             placeholder="Type a message"
//             value={message}
//             onChange={( event ) => setMessage(event.target.value)}
//             onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
//         />
//         <button
//             className="sendButton"
//             onClick={(event) => sendMessage(event)}
//         >Send
//         </button>
//     </form>
// )
const Input = () => {

    const [message, setMessage] = useState('')
    //
    useEffect(() => {

    }, [])

    // const socket = io(window.location.hostname + ':3000');
    // socket.on('chat', function (message) {
    //     console.log(JSON.parse(message))
    // })


    let echo = new Echo({
        broadcaster: 'socket.io',
        client: Socketio,
        host: window.location.hostname + ':6001'
    });


    echo.channel('chat').listen('MessageSent', (e) => {
        console.log(e)
        // setMessages(messages.push(e))
    })

    const options = {
        message
    }


    const sendMessage = (options) => {
        let res = axios.post('/messages', options).then((response) => {
            // console.log(response.data)
            // setMessages(response.data)
        })
    }



    // async function sendMessage(options) {
    //     // try {
    //     //     const sendResp = await axios.post("/messages", options);
    //     //     // setCurrentUser({ email: options.email, name: options.name });
    //     //     return sendResp;
    //     // } catch (e) {
    //     //     return e.response;
    //     // }
    //
    //     axios.post('/messages', message).then((response) => {
    //         console.log(response)
    //     })
    // }


    const handleMessageSubmit = async (e) => {
        e.preventDefault()
        const res = await sendMessage(options)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleMessageSubmit()
        }
    }

    return (
        <form className="form" onSubmit={handleMessageSubmit}>
            <input
                name="message"
                type="text"
                className="input"
                placeholder="Type a message"
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={handleKeyPress}
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
