import React, {useState} from 'react';
import axios from 'axios';
import './form-component.css'

const presenceValue = {
    1:'Смогу приехать на церемонию',
    2:'Смогу приехать на фотосессию',
    3:'Смогу приехать на банкет',
    4:'К сожалению, не смогу присутствовать',
}
const transferValue = {
    7:'Да',
    8:'Буду на своей машине',
}

export const FormComponent = () =>{
    const [name, setName] = useState('');
    const [presence, setPresence] = useState(0);
    const [drinks, setDrinks] = useState(['none']);
    const [allergy, setAllergy] = useState('');
    const [transfer, setTransfer] = useState(0);

    const onChangeDrinks = (value)=>{
        if(value=='none'){
            setDrinks(['none'])
            return
        }
        if(drinks.includes(value)){
            const newVal = drinks.filter((item)=> item != value && item != 'none')
            setDrinks(newVal);
            return
        }
        else{
            const newVal = drinks;
            newVal.push(value)
            setDrinks(newVal.filter((item)=> item != 'none'));
            return
        }
    }
    const sendData = () =>{
        const body ={
            name:name,
            presence:presenceValue[presence],
            drinks:drinks.join(', '),
            allergy:allergy,
            transfer:transferValue[transfer],
        };
        console.log('body',body)
        axios.post('https://api.sheetbest.com/sheets/92345ab0-cc4b-4d9c-b958-b10acc9a1661', body)
        .then(response => {
          console.log(response);
        })
    }
    return (
        <div className='form-containet'>
            <div className='form-title'>Анкета</div>
            <div className='questions-container'>
                <div className='questions-container-item'>
                    <div className='question-title requered'>Напишите, пожалуйста, Вашу фамилию и имя</div>
                    <div className='question-input'>

                            <input value={name} className="input" onChange={(e)=>setName(e.target.value)} />

                    </div>
                </div>
                <div className='questions-container'>
                    <div className='question-title requered'>Сможете ли присутствовать на нашем торжестве?</div>
                    <div className='question-radio'>
                        <div className='radio-item' onChange={()=>setPresence(1)}>
                            <input type="radio" id="1" checked={presence == 1 ? true:false}/>
                            <label for="1" className='radio-text'>Смогу приехать на церемонию</label>
                        </div>
                        <div className='radio-item' onChange={()=>setPresence(2)}>
                            <input type="radio" id="2" checked={presence == 2 ? true:false}/>
                            <label for="2" className='radio-text'>Смогу приехать на фотосессию</label>
                        </div>
                        <div className='radio-item' onChange={()=>setPresence(3)}>
                            <input type="radio" id="3" checked={presence == 3 ? true:false}/>
                            <label for="3" className='radio-text'>Смогу приехать на банкет</label>
                        </div>
                        <div className='radio-item' onChange={()=>setPresence(4)}>
                            <input type="radio" id="4" checked={presence == 4 ? true:false}/>
                            <label for="4" className='radio-text'>К сожалению, не смогу присутствовать</label>
                        </div>
                    </div>
                </div>
                <div className='questions-container'>
                    <div className='question-title requered'>Нужен ли Вам трансфер?</div>
                    <div className='question-radio'>
                        <div className='radio-item' onChange={()=>setTransfer(7)}>
                            <input type="radio" id="7" checked={transfer == 7 ? true:false}/>
                            <label for="7" className='radio-text'>Да</label>
                        </div>
                        <div className='radio-item' onChange={()=>setTransfer(8)}>
                            <input type="radio" id="8" checked={transfer == 8 ? true:false}/>
                            <label for="8" className='radio-text'>Буду на своей машине</label>
                        </div>
                    </div>
                </div>
                <div className='questions-container'>
                    <div className='question-title requered'>Что предпочитаете из напитков?</div>
                    <div className='question-cheackbox'>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('redVine')}>
                        <input type="checkbox" id="redVine" checked={drinks.includes('redVine')}/>
                            <label for="redVine" className='radio-text'>Красное вино</label>
                        </div>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('whiteVine')}>
                        <input type="checkbox" id="whiteVine" checked={drinks.includes('whiteVine')}/>
                            <label for="whiteVine" className='radio-text'>Белое вино</label>
                        </div>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('Shampaine')}>
                        <input type="checkbox" id="Shampaine" checked={drinks.includes('Shampaine')}/>
                            <label for="Shampaine" className='radio-text'>Шампанское</label>
                        </div>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('Vodka')}>
                        <input type="checkbox" id="Vodka" checked={drinks.includes('Vodka')}/>
                            <label for="Vodka" className='radio-text'>Водка</label>
                        </div>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('Wiski')}>
                        <input type="checkbox" id="Wiski" checked={drinks.includes('Wiski')}/>
                            <label for="Wiski" className='radio-text'>Виски</label>
                        </div>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('Cognac')}>
                        <input type="checkbox" id="Cognac" checked={drinks.includes('Cognac')}/>
                            <label for="Cognac" className='radio-text'>Коньяк</label>
                        </div>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('Tequila')}>
                        <input type="checkbox" id="Tequila" checked={drinks.includes('Tequila')}/>
                            <label for="Tequila" className='radio-text'>Текила</label>
                        </div>
                        <div className='cheackbox-item' onChange={()=>onChangeDrinks('none')}>
                        <input type="checkbox" id="none" checked={drinks.includes('none')}/>
                            <label for="none" className='radio-text'>Не пью алкоголь</label>
                        </div>
                    </div>
                </div>
                <div className='questions-container'>
                    <div className='question-title'>Есть ли у вас аллергии, если есть то какие?</div>
                    <div className='question-input'>
                    <input value={allergy} className="input" onChange={(e)=>setAllergy(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className='btn-submit' onClick={()=>sendData()}>Отправить</div>
        </div>
    )
}