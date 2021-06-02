import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import Echo from "laravel-echo";
import Socketio from 'socket.io-client';
import axios from "axios";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import './chat.css'

// const Chat = ({ location }) =>
const Chat = ({ location }) => {
    // const [name, setName] = useState('')
    // const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])

    const allMessages = () => {
        let res = axios.get('/messages').then((response) => {
            // console.log(response)
            setMessages(response.data)
        })
    }

    useEffect(() => {
        // const {name, room} = queryString.parse(location.search)
        // setName(name)
        // setRoom(room)

        allMessages()
    },[])


    return (
        <div className="outerContainer">
            <div className="container">
                {/*<InfoBar room={room}/>*/}
                {/*<Messages messages={messages} name={name} />*/}
                {/*<Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>*/}
                {/*room={room}                */}
                <InfoBar  />
                <Messages messages={messages}  />
                <Input messages={messages} setMessages={setMessages} />
            </div>
        </div>
    )
}

export default Chat
