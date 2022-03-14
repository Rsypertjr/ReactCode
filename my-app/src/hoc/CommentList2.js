import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import DataSource from './DataSource';
import Comment from './Comment';

class CommentList2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // 'DataSource is some global data source
            comments: DataSource.getComments()
        }
    }

    componentDidMount(){
        // Subscribe to changes
        DataSource.addChangeListener(this.handleChange);        
    }

    componentWillUnmount() {
        // Clean up listener
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange(){
        // Update component state whenever the data source changes
        this.setState({
            comments: DataSource.getComments()
        })
        console.log("Comments in state: ",this.state.comments);
    }

    render() {
        return (
            <div>
              <Comment comments={this.state.comments} />
            </div>
        );  
    }
}
export default CommentList2;
