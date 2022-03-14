import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import LogProps from './components/HigherOrderComponent';
//import FancyButton from './components/HigherOrderComponent2';
import FancyButton from './components/CustomDisplayName';
import BlurExample from './focus/BlurFocus';
import App from './components/KeyedFragments';
import CommentList from './hoc/CommentList';
import CommentList2 from './hoc/CommentList2';
import GetSocialMedia from './hoc/HocWithSubscription';
import App2 from './uselibs/UseChosen2';
import App3 from './uselibs/ReplaceStrings';
import HelloButton from './uselibs/EventRegister';

const ref = React.createRef();

const Main = (props) => {
    return (
        <div>
            <FancyButton
                label="Click Me!"
                ref = {ref}
             />
            <BlurExample />
            <App /> 
            <CommentList />
            <CommentList2 />
            <GetSocialMedia/> 
            <App2 />
            <App3 /> 
            <HelloButton />

        </div>
    );

}

ReactDOM.render(
    <React.StrictMode>
        <Router></Router>
        <Main/>
    </React.StrictMode>,
    document.getElementById('root')
   
);

