import React from 'react';
import ReactDOM, { render } from 'react-dom';

function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                // Without the 'key', React will fire a key warning
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt> 
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>

    );
}

const items = [    
    {id:1,term: "computer", description:"multipurpose computing device"},
    {id:2,term: "monitor", description:"computer display device"},
    {id:3,term: "mouse", description:"pointing device"}
    ];

function App(){
        return(
            <Glossary items={items} />
        );
}

export default App;