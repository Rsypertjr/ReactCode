import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import DataSource from './DataSource';
import Comment from './Comment';

function CommentList() {
    const [comments, setComments] = useState(DataSource.getComments());

    useEffect(() => {
        DataSource.addChangeListener(onChange);
        DataSource.emitChange();  
        return () => DataSource.removeChangeListener(onChange);
    }, []);


  
    function onChange() {
        // Update component state whenever the data source changes
        
        setComments(DataSource.getComments());
        console.log("The Comments: ",comments);
    
        
    }

   
    return (
        <div>
          <Comment comments={comments} />
        </div>
    );  
}

export default CommentList;