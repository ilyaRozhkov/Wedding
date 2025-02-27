import react from "react";
import './plane.css';
import {motion} from "framer-motion";


const animationStyle = {
    timeOutPagesHidden : {
        y: 20,
        opacity: 0
    },
    timeOutPagesVisible : custom => ({
        y:0,
        opacity: 1,
        transition: {delay : custom *0.7},
    })
}

const animationStyleMiddle = {
    timeOutPagesHiddenMiddle : {
        scaleY: 0,
    },
    timeOutPagesVisibleMiddle : custom => ({

        scaleY: 1,
        transition: {duration: 3},
    })
}

export const Plane = () => {
    return (
        <motion.div
        initial={'timeOutPagesHidden'}
        whileInView={'timeOutPagesVisible'}  className="plane-container">
            <motion.div custom={1} variants={animationStyle} className="plane-title">Программа</motion.div>
            <div className="plane-container-item">
                <div className="plane-container-item-letf">
                    <motion.div custom={2} variants={animationStyle} className="plane-item" style={{marginTop: '5px'}}>
                        <div>14:00</div>
                        <div> Регистрация</div>
                    </motion.div>
                    <motion.div custom={4} variants={animationStyle} className="plane-item"style={{marginTop: '55px'}}>
                        <div>17:00 </div>
                        <div>Ресторан</div>
                    </motion.div>
                </div>
                <motion.div
        initial={'timeOutPagesHiddenMiddle'}
        whileInView={'timeOutPagesVisibleMiddle'} >
                <motion.div custom={1} variants={animationStyleMiddle} className="plane-container-item-line"></motion.div>
                </motion.div>
                <div
                     className="plane-container-item-right">
                <motion.div custom={3} variants={animationStyle} className="plane-item" style={{marginTop: '55px'}}>
                    <div>14:30</div>
                    <div> Фотосессия</div>
                </motion.div>
                <motion.div custom={5} variants={animationStyle} className="plane-item" style={{marginTop: '55px'}}>
                    <div>22:00</div>
                    <div> Торт</div>
                </motion.div>     
                </div>
            </div>

        </motion.div>
    )
}