import React from 'react';
import "./detail.css";

export const Detail = () => {
    

    return (
        <div className='detail-container'>
            <div className='detail-title'>Детали</div>
            <div className='detail-item-container'>
                <div className='detail-item-item'>Главное для нас - ваше присутствие.
                Будем признательны за альтернативу букетам в форме бутылочки вина или другого приятного напитка и записки о событии, к которому приурочить ее открытие.</div>
                <div className='detail-item-split'>♥</div>
                <div className='detail-item-item'>Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи.</div>
                <div className='detail-item-split'>♥</div>
                <div className='detail-item-item'>К великому сожалению, в ресторане нет детских зон и нет возможности пригласить аниматоров для того, чтобы занять самых маленьких наших гостей, потому просим заранее подумать о том, с кем оставить Вашу кроху на праздничный вечер.</div>
            </div>
        </div>
    )
}