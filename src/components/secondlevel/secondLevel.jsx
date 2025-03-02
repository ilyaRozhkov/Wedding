import './secondLevel.css'
import React from 'react'
import {motion} from "framer-motion";
import {user, userTitle} from '../../common/user-name.ts'

const animationStyle = {
    timeOutPagesHidden : {
        y: 20,
        opacity: 0,
    },
    timeOutPagesVisible : custom => ({
        y:0,
        opacity: 1,
        transition: {delay : custom *0.7},
    })
}


export const SecondLevel = () =>{
    let params = new URLSearchParams(document.location.search);
    let par = params.get('key'); // 'key' – это имя целевого параметра
    const str = `${userTitle[par]} ${user[par]}`
    return (
        <motion.div
        initial={'timeOutPagesHidden'}
        whileInView={'timeOutPagesVisible'}   viewport={{ once: true }} className='second-level-container'>
            <motion.div custom={1} variants={animationStyle} className='second-level-title'>{str}</motion.div>
            <motion.div custom={2} variants={animationStyle} className='second-level-text'>Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких и друзей.<br/> С большим удовольствием приглашаем вас на знаменательный праздник <br/> Нашу Свадьбу!</motion.div>
        </motion.div>
    )
}