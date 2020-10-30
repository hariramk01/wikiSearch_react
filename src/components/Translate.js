//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React,{useHooks, useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label:"Afrikaans",
        value:'af'
    },
    {
        label:"Arabic",
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Kannada',
        value:'kn'  
    },
    {
        label:'Tamil',
        value:'ta'  
    }
]


const Translate = () =>{
    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('');
    return(
        <div>
            <div className='ui form container'>
                <div className='field'>
                    <label>Enter any text</label>
                    <input value={text} onChange={(e)=>{setText(e.target.value)}}></input>
                </div>
            </div>
            <Dropdown 
            selected={language} 
            label="Select a language" 
            onSelectedChange={setLanguage} 
            options={options}/>
            <hr/>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate;
