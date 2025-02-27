import React from "react";
import './dress-code.css';

export const DressCode = () =>{

    return (
        <div className='dress-code-container'>
            <div className='dress-code-title'>Дресс-код</div>
            <div className='dress-code-text'>Мы очень ждем и с удовольствием готовимся к Нашему дню! Поддержите нас своими улыбками, а также красивыми нарядами в палитре торжества</div>
            <div className='dress-code-item-container'>
                <div className='dress-code-color' style={{backgroundColor: '#e9e2da'}}></div>
                <div className='dress-code-color' style={{backgroundColor: '#caaf8e'}}></div>
                <div className='dress-code-color' style={{backgroundColor: '#73714b'}}></div>
                <div className='dress-code-color' style={{backgroundColor: '#383c1b'}}></div>
        
            </div>
        </div>
    )
}