import React from "react";

import './input.css'

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
const Input = () => (
    <form className="form">
        <input
            type="text"
            className="input"
            placeholder="Type a message"
        />
        <button
            className="sendButton"
        >
            Send
        </button>
    </form>
)
export default Input;
