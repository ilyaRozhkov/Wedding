import React from 'react';
import './contact.css'
import tg from '../../img/contact/Vector.svg'

export const Contact = () =>{

    return (
        <div className='contact-container'>
            <div className='contact-title'>Контакты</div>
            <div className='contact-body'>
                <div className='contact-item'>
                    <div className='contact-name'>Жених</div>
                    <div className='contact-icon'>
                    +7 (910)-296-48-81
                        <div className='contact-telegram'>
                        <a href='https://t.me/ilya_kray32' target="_blank">
                        <img src={tg} alt="" />
</a>
                        </div>
                    </div>
                </div>
                <div className='contact-item'>
                    <div className='contact-name'>Невеста</div>
                    <div className='contact-icon'>
                    +7 (906)-502-61-25
                        <div className='contact-telegram'>
                            <a href='https://t.me/glirian_kesh' target="_blank">
                        <img src={tg} alt="" />
</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
} 