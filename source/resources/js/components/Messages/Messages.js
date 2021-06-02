import React, { useState, useEffect } from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

import Message from "../Message/Message";

import './messages.css'
import axios from "axios";


// const Messages = ({ messages, name }) =>
const Messages = ( {messages} ) => {

    return (
        <ScrollToBottom className="box">
            {messages.map((message, i) => <div key={i}><Message message={message} /></div>)}
        </ScrollToBottom>
    )
}

export default Messages;
