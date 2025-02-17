import React from "react";
import './dress-code.css';

export const DressCode = () =>{

    return (
        <div className='dress-code-container'>
            <div className='dress-code-title'>Дресс-код</div>
            <div className='dress-code-text'>Мы очень ждем и с удовольствием готовимся к Нашему дню! Поддержите нас своими улыбками, а также красивыми нарядами в палитре торжества</div>
            <div className='dress-code-item-container'>
                <div className='dress-code-color' style={{backgroundColor: '#000000'}}></div>
                <div className='dress-code-color' style={{backgroundColor: '#686868'}}></div>
                <div className='dress-code-color' style={{backgroundColor: '#a1a1a1'}}></div>
                <div className='dress-code-color' style={{backgroundColor: '#d4c7b8'}}></div>
                <div className='dress-code-color' style={{backgroundColor: '#f8f3ed'}}></div>
            </div>
        </div>
    )
}