import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Comment(props){
    return(
        <div>
         {props.comments.map((comment) => (
            <div key={comment.id} >
                <p>{comment.content}</p>
            </div>           
         ))}
            
        </div>
    );
}

export default Comment;