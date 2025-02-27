import React from "react";
import './dress-code.css';

import {motion} from "framer-motion";


const animationStyleLeft = {
    timeOutPagesHidden : {
        x: 150,
        opacity: 0
    },
    timeOutPagesVisible : custom => ({
        x:0,
        opacity: 1,
        transition: {delay : custom *0.5},
    })
}

export const DressCode = () =>{

    return (
        <div className='dress-code-container'>
            <div className='dress-code-title'>Дресс-код</div>
            <div className='dress-code-text'>Мы очень ждем и с удовольствием готовимся к Нашему дню! Поддержите нас своими улыбками, а также красивыми нарядами в палитре торжества</div>
            <motion.div initial={'timeOutPagesHidden'}
                    whileInView={'timeOutPagesVisible'} className='dress-code-item-container'>
                <motion.div custom={1} variants={animationStyleLeft} className='dress-code-color' style={{backgroundColor: '#e9e2da'}}></motion.div>
                <motion.div custom={1} variants={animationStyleLeft} className='dress-code-color' style={{backgroundColor: '#caaf8e'}}></motion.div>
                <motion.div custom={1} variants={animationStyleLeft} className='dress-code-color' style={{backgroundColor: '#73714b'}}></motion.div>
                <motion.div custom={1} variants={animationStyleLeft} className='dress-code-color' style={{backgroundColor: '#383c1b'}}></motion.div>
        
            </motion.div>
        </div>
    )
}