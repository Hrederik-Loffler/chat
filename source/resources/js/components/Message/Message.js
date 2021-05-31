// import React from "react";
//
// import classNames from "classnames/bind";
//
// import './message.css'
//
// //I need to have here props " one <message>" and "name"
// //from Messages component where i try to map all messages to one message
//
// const Message = ({ message: { user, text }, name }) => {
//     let isSentByCurrentUser = false;
//     /* i need a lowerCase name for backend */
//     const trimmedName = name.trim().toLowerCase()
//     //where i need put message
//     if (user === trimmedName) {
//         isSentByCurrentUser = true
//     }
//
//     return (
//         isSentByCurrentUser ?
//             (
//                 <div className="messageContainer justifyEnd">
//                     <p className="sentText pr-10">{trimmedName}</p>
//                     <div classNames="messageBox backgroundBlue">
//                         <p className="messageText">{text}</p>
//                     </div>
//                 </div>
//             )
//             :
//             (
//                 <div className="messageContainer justifyStart">
//                     <div className="messageBox backgroundLight">
//                         <p className="messageText colorDark">{text}</p>
//                     </div>
//                     <p className="sentText pl-10">{user}</p>
//                 </div>
//             )
//     )
// }
//
// export default Message;
