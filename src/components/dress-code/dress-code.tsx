import React from "react";
import './dress-code.css';
import item1 from '../../img/dress-code/1.jpg'
import item2 from '../../img/dress-code/2.jpg'
import item3 from '../../img/dress-code/3.jpg'
import item4 from '../../img/dress-code/4.jpg'

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

export const DressCode = () =>{

    return (
        <motion.div initial={'timeOutPagesHidden'}
        whileInView={'timeOutPagesVisible'}   viewport={{ once: true }} className='dress-code-container'>
            <motion.div custom={1} variants={animationStyle} className='dress-code-title'>Дресс-код</motion.div>
            <motion.div custom={1} variants={animationStyle} className='dress-code-text'>Мы очень ждем и с удовольствием готовимся к Нашему дню! Поддержите нас своими улыбками, а также красивыми нарядами в данной цветовой палитре.</motion.div>
            <motion.div custom={2} variants={animationStyle} className='dress-code-item-container3'>
                <div className='dress-code-color3 ' >
                <img className='img-color-container3' src={item1} alt=''/>
                </div>
                <div className='dress-code-color3 ' >
                <img className='img-color-container3' src={item2} alt=''/>
                </div>
                <div className='dress-code-color3 ' >
                <img className='img-color-container3' src={item3} alt=''/>
                </div>
                <div className='dress-code-color3 ' >
                <img className='img-color-container3' src={item4} alt=''/></div>       
            </motion.div>
        </motion.div>
    )
}