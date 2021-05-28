import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import {io} from 'socket.io-client';
import axios from "axios";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import './chat.css'


const Chat = ({ location }) => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'http://127.0.0.1:3000'
    let socket = io(ENDPOINT)

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, () => {

        })

        return () => {
            socket.emit('disconnect')

            socket.off()
        }
        //[ENDPOINT, location.search]
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', ( message ) => {

        })
    })

    socket.on('connection');


    // const setMessage = (e) => {
    //     console.log(e)
    // }

    const sendMessage = (event) => {
        /*
            event.preventDefault();

            if(message) {
                socket.emit('sendMessage', message, () => sendMesage(''))

            }


         */

        console.log(message)
    }

    // value for input need to be variable message

    // onChange={(event) => setMessage(event.tagret.value)}
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar/>
                <Messages />
                <Input/>
            </div>
        </div>
    )
}

export default Chat
