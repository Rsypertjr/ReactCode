import React, {Component} from 'react';
import ReactDOM from 'react-dom';


function Button(props) {
    return <button onClick={props.onClick}>Say Hello</button>;
}

function HelloButton(){
    function handleClick(){
        alert('Hello!');
    }
    return <Button onClick={handleClick} />;
}

export default HelloButton;