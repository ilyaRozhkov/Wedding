import React from 'react';
import './contact.css'
export const Contact = () =>{

    return (
        <div className='contact-container'>
            <div className='contact-title'>Контакты</div>
            <div className='contact-body'>
                <div className='contact-item'>
                    <div className='contact-name'>Жених: +7 (910)-296-48-81</div>
                    <div className='contact-icon'>
                        <div className='contact-telegram'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#FFF" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-2.097 9.76c-.144.654-.524.817-1.062.508l-2.945-2.17-1.422 1.371a.785.785 0 0 1-.56.231l.213-3.003 5.454-4.925c.22-.196-.048-.276-.337-.101l-6.736 4.25-2.91-.913c-.643-.203-.65-.643.135-.954l11.566-4.458c.536-.232 1.006.128.832.941z"/>
</svg>
                        </div>
                    </div>
                </div>
                <div className='contact-item'>
                    <div className='contact-name'>Невеста: +7 (906)-502-61-25</div>
                    <div className='contact-icon'>
                        <div className='contact-telegram'>
                            <a href='https://web.telegram.org/a/#719248983' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#FFF" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-2.097 9.76c-.144.654-.524.817-1.062.508l-2.945-2.17-1.422 1.371a.785.785 0 0 1-.56.231l.213-3.003 5.454-4.925c.22-.196-.048-.276-.337-.101l-6.736 4.25-2.91-.913c-.643-.203-.65-.643.135-.954l11.566-4.458c.536-.232 1.006.128.832.941z"/>
</svg>
</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
} 