import React from "react";
import './dress-code.css';

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
            <motion.div custom={1} variants={animationStyle} className='dress-code-text'>Мы очень ждем и с удовольствием готовимся к Нашему дню! Поддержите нас своими улыбками, а также красивыми нарядами в палитре торжества</motion.div>
            <motion.div custom={2} variants={animationStyle} className='dress-code-item-container'>
                <div className='dress-code-color color-first' style={{backgroundColor: '#e9e2da'}}></div>
                <div className='dress-code-color color-second' style={{backgroundColor: '#caaf8e'}}></div>
                <div className='dress-code-color color-third' style={{backgroundColor: '#73714b'}}></div>
                <div className='dress-code-color color-fourth' style={{backgroundColor: '#383c1b'}}></div>
        
            </motion.div>
        </motion.div>
    )
}