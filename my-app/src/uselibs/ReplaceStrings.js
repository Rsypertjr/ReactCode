import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'


function AButton(props){
    return <button id="btn" onClick={props.onClick} >Say Hello</button>
} 

function handleClick() {
    $('#btn').on('click',function() {
      alert('Hello!');
    });
}


class App3 extends React.Component{ 
    constructor(props){
        super(props);
      
    }
   
    render(){
        return(
            <AButton onClick={handleClick}/>
        );
    }
       
}



export default App3;