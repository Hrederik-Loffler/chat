import React from "react";

import onlineIcon from '../../../icons/onlineIcon.png'
import closeIcon from '../../../icons/closeIcon.png'


import './infobar.css'

// const InfoBar = ({ room }) =>
const InfoBar = ({ room }) =>
    (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image" />
                {/*<h3>room { room }</h3>*/}
                <h3>room {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image" /></a>
            </div>
        </div>
    )

export default InfoBar;
