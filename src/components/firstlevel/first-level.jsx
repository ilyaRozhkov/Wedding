import React from "react";
import './first-level.css';

import ebloUs from '../../img/firstlevelimg/IbloUs1.jpg'
import flower from '../../img/firstlevelimg/flower.png'
import sideFlower from '../../img/firstlevelimg/sideFlower.png'

export const FirstLevel = () =>{

    return (
        <div className="first-container">
        <div className="first-level-container">
            <div className="first-level-containet-date">
                <div className="containet-date">12</div>
                <div className="containet-date">07</div>
                <div className="containet-date">25</div>
                <div className="containet-date">
                    <img className="image-flower-first-level" src={flower} alt=''/>
                </div>
            </div>
            <div className="middle-side-image">
            <img className="image-side-flower-first-level" src={sideFlower} alt=''/>
                <img className="image-first-level" src={ebloUs} alt="" />
            </div>
        </div></div>
    )
}