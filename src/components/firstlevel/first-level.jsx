import React from "react";
import './first-level.css';

import ebloUs from '../../img/firstlevelimg/IbloUs.jpg'

export const FirstLevel = () =>{

    return (
        <div className="first-level-container">
            <div className="first-level-containet-date">
                <div className="containet-date">12</div>
                <div className="containet-date">07</div>
                <div className="containet-date">25</div>
            </div>
            <div className="middle-side-image">
                <img className="image-first-level" src={ebloUs} alt="" />
            </div>
        </div>
    )
}