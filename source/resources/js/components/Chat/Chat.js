import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import {io} from 'socket.io-client';
import axios from "axios";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import './chat.css'

// const Chat = ({ location }) =>
const Chat = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    useEffect(() => {
            const {name, room} = queryString.parse(location.search)

            setName(name)
            setRoom(room)

    },[])


    // const [name, setName] = useState('')
    // const [room, setRoom] = useState('')
    // const [message, setMessage] = useState('')
    // const [messages, setMessages] = useState([])
    // const ENDPOINT = 'http://127.0.0.1:3000'
    // let socket = io(ENDPOINT)
    //
    // useEffect(() => {
    //     const {name, room} = queryString.parse(location.search)
    //
    //     setName(name)
    //     setRoom(room)
    //
    //     socket.emit('join', { name, room }, () => {
    //     })
    //
    //     return () => {
    //         socket.emit('disconnect')
    //         socket.off()
    //     }
    //     //[ENDPOINT, location.search]
    // }, [])
    //
    // useEffect(() => {
    //     socket.on('message', ( message ) => {
    //         setMessages([...messages, message])
    //     })
    //
    //     // socket.on("roomData", ({ users }) => {
    //     //     setUser(users);
    //     // })
    // }, [])
    //
    //
    // socket.on('connection');
    //
    // //function for sending messages
    // const sendMessage = (event) => {
    //     event.preventDefault()
    //
    //     if (message) {
    //         socket.emit('sendMessage', message, () => {
    //             setMessage('')
    //         })
    //     }
    // }
    // console.log(message, messages)
    return (
        <div className="outerContainer">
            <div className="container">
                {/*<InfoBar room={room}/>*/}
                {/*<Messages messages={messages} name={name} />*/}
                {/*<Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>*/}
                <InfoBar room={room} />
                {/*<Messages  />*/}
                <Input />
            </div>
        </div>
    )
}

export default Chat
