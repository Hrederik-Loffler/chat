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
const Chat = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        setName(name)
        setRoom(room)

        const allMessages = () => {
            let res = axios.get('/messages').then((response) => {
                // console.log(response.data)
               setMessages(response.data)
            })
        }
        allMessages()

    },[messages])





    return (
        <div className="outerContainer">
            <div className="container">
                {/*<InfoBar room={room}/>*/}
                {/*<Messages messages={messages} name={name} />*/}
                {/*<Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>*/}
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input />
            </div>
        </div>
    )
}

export default Chat
