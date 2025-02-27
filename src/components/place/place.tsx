import './place.css'
import React, {useEffect, useState} from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


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
        whileInView={'timeOutPagesVisible'} className='place-container'>
            <motion.div custom={1} variants={animationStyle} className='place-title'>Место проведения</motion.div>
            <motion.div custom={2} variants={animationStyle} className='place-name'>Ресторан Арт-холл</motion.div>
            <motion.div custom={3} variants={animationStyle} className='place-address'>г. Брянск, Московский проспект, 158</motion.div>

            <motion.button custom={4} variants={animationStyle} className="cta" onClick={()=>onMap()}>
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
{mapOpen && 
<div className='place-map'>
<YMaps>
      <Map defaultState={{ center: [53.21, 34.4], zoom: 11, controls: ["zoomControl", "fullscreenControl"],
    }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
        <Placemark geometry={[53.20728, 34.46549]} modules={["geoObject.addon.balloon"]}       properties={{
        balloonContentBody:
          "Ресторан",
      }}/>
              <Placemark geometry={[53.21379, 34.42291]} modules={["geoObject.addon.balloon"]}       properties={{
        balloonContentBody:
          "ЗАГС",
      }}/>
      </Map>
    </YMaps>
    </div>}
        </motion.div>
    )
}