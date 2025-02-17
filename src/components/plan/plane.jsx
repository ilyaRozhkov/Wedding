import react from "react";
import './plane.css';

export const Plane = () => {
    return (
        <div className="plane-container">
            <div className="plane-title">Программа</div>
            <div className="plane-container-item">
                <div className="plane-container-item-letf">
                    <div className="plane-item" style={{marginTop: '5px'}}><div>14:00</div><div> Регистрация</div></div>
                    <div className="plane-item"style={{marginTop: '55px'}}><div>17:00 </div><div>Ресторан</div></div>
                </div>
                <div className="plane-container-item-line"></div>
                <div className="plane-container-item-right">
                <div className="plane-item" style={{marginTop: '55px'}}><div>14:30</div><div> Фотосессия</div></div>
                <div className="plane-item" style={{marginTop: '55px'}}><div>22:00</div><div> Торт</div>       </div>     
                </div>
            </div>

        </div>
    )
}