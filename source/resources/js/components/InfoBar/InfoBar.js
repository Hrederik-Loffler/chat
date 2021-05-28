import React from "react";

import onlineIcon from '../../../icons/onlineIcon.png'
import closeIcon from '../../../icons/closeIcon.png'


import './infobar.css'


const InfoBar = () =>
    (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image" />
                <h3>Room number</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image" /></a>
            </div>
        </div>
    )

export default InfoBar;
