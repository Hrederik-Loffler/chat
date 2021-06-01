import React from "react";

import onlineIcon from '../../../icons/onlineIcon.png'
import closeIcon from '../../../icons/closeIcon.png'


import './infobar.css'

// const InfoBar = ({ room }) =>
const InfoBar = ({ room }) => {

    async function logout () {
       try {
           const res = await axios.post("/logout");
       } catch (e) {
           //console.log('logout')
       }
    }

    const handlerLogout = async (e) => {
        // e.preventDefault()
        // document.location.reload()

        const res = await logout();
        // console.log(res)
        // console.log('dasd')
    }

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image"/>
                {/*<h3>room { room }</h3>*/}
                <h3>room {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image" onClick={handlerLogout}/></a>
            </div>
        </div>
    )
}
export default InfoBar;
