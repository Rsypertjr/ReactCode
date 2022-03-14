import React from 'react';
import ReactDOM from 'react-dom';
import { renderMatches } from 'react-router';

class Table extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns2 />
                    </tr>
                </tbody>               
            </table>
        );
    }
}

class Columns extends React.Component {
    render(){
        return(
            <React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
        );       
    }
}

class Columns2 extends React.Component {
    render(){
        return(
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        );       
    }
}

function App(){
    return(
        <div>
            <Table />
        </div>
    );
}

export default App;