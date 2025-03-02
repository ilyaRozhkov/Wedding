import './place.css'
import React, {useEffect, useState} from 'react';
import placemap from '../../img/place/place.png'


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


export const Place = () =>{
    const [mapOpen, setMapOpen] = useState(false);

    useEffect(()=>{
        setMapOpen(false);
    },[]);
    const onMap = () =>{
        setMapOpen(!mapOpen)
    }
    return (
        <motion.div         initial={'timeOutPagesHidden'}
        whileInView={'timeOutPagesVisible'}   viewport={{ once: true }} className='place-container'>
            <motion.div custom={1} variants={animationStyle} className='place-title'>Место проведения</motion.div>
            <motion.div custom={2} variants={animationStyle} className='place-name'>Ресторан Арт-холл</motion.div>
            <motion.div custom={2} variants={animationStyle} className='place-address'>г. Брянск, Московский проспект, 158</motion.div>
            <motion.div custom={3} variants={animationStyle}>
            <img className="place-map" src={placemap} alt=''/>
            </motion.div>
            <motion.button custom={3} variants={animationStyle} className="cta" onClick={()=>
window.open('https://yandex.ru/maps/191/bryansk/?ll=34.466978%2C53.206881&mode=poi&poi%5Bpoint%5D=34.465858%2C53.207234&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1208546851&z=17', '_blank')}>
  <span className="hover-underline-animation"> Посмотреть на карте </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</motion.button>
        </motion.div>
    )
}