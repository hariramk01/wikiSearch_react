import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title:'What is react?',
        content:'React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components.'
    },
    {
        title:'Why use react?',
        content:'React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.'
    },
    {
        title:'How do you use react?',
        content:' we will keep using JSX. JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.'
    }
]

const options =[
    {label:'The color red',value:'red'},
    {label:'The color green',value:'green'},
    {label:'The shade blue',value:'blue'},
];

export default () =>{
    const [selected,setSelected] = useState(options[0]);
    const [showDropdown,setShowDropdown] = useState(true);
    return(
    <div>
        <Header/>
        <Route path='/'>
            <Accordion items={items}/>
        </Route>
        <Route path='/list'>
            <Search/>
        </Route>
        <Route path='/dropdown'>
            <Dropdown
            label='Select a color'
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />
        </Route>
        <Route path='/translate'>
            <Translate/>
        </Route>
    </div>)
}
