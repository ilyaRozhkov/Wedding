import React from 'react';
import "./detail.css";
import { ReactComponent as Flower } from '../../img/detail/Flowers.svg';

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

export const Detail = () => {
    

    return (
        <motion.div initial={'timeOutPagesHidden'}
        whileInView={'timeOutPagesVisible'}   viewport={{ once: true }} className='detail-container'>
            <motion.div custom={1} variants={animationStyle} className='detail-title'>Детали</motion.div>
            <motion.div custom={2} variants={animationStyle} className='detail-item-container'>
                <motion.div custom={3} variants={animationStyle} className='detail-item-item'>Главное для нас - ваше присутствие.
                Будем признательны за альтернативу букетам в форме бутылочки вина или другого приятного напитка и записки о событии, к которому приурочить ее открытие.</motion.div>
                <motion.div custom={4} variants={animationStyle} className='detail-item-split'><Flower style={{width: '30px', height: '30px'}}/></motion.div>
                <motion.div custom={5} variants={animationStyle} className='detail-item-item'>Вы можете не переживать по поводу подарка, любая комфортная для вас сумма в конверте приблизит нас к мечте!</motion.div>
                <motion.div custom={6} variants={animationStyle} className='detail-item-split'><Flower style={{width: '30px', height: '30px'}}/></motion.div>
                <motion.div custom={7} variants={animationStyle} className='detail-item-item'>К великому сожалению, в ресторане нет детских зон и нет возможности пригласить аниматоров для того, чтобы занять самых маленьких наших гостей, потому просим заранее подумать о том, с кем оставить Вашу кроху на праздничный вечер.</motion.div>
            </motion.div>
        </motion.div>
    )
}