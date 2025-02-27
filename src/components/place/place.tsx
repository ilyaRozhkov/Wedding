import './place.css'
import React, {useEffect, useState} from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const Place = () =>{
    const [mapOpen, setMapOpen] = useState(false);

    useEffect(()=>{
        setMapOpen(false);
    },[]);
    const onMap = () =>{
        setMapOpen(!mapOpen)
    }
    return (
        <div className='place-container'>
            <div className='place-title'>Место проведения</div>
            <div className='place-name'>Ресторан Арт-холл</div>
            <div className='place-address'>г. Брянск, Московский проспект, 158</div>

            <button className="cta" onClick={()=>onMap()}>
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
</button>
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
        </div>
    )
}