import React, {useState, useEffect} from "react";

import './input.css'
import axios from "axios";

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


    useEffect(() => {

        console.log(window.Echo.channel('chat'))
        window.Echo.channel('chat')
            .listen('Message', (data) => {
                console.log(data)
            })
    }, [])

    const options = {
        message
    }

    async function sendMessage(options) {
        try {
            const signupResp = await axios.post("/message", options);
            // setCurrentUser({ email: options.email, name: options.name });
            return messsageResp;
        } catch (e) {
            return e.response;
        }
    }


    const handleMessageSubmit = async (e) => {
        e.preventDefault()

        const res = await sendMessage(options)

        console.log(res)


    }

    return (

        <form className="form" onSubmit={handleMessageSubmit}>
            <input
                name="message"
                type="text"
                className="input"
                placeholder="Type a message"
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
