import React from 'react';
import ReactDOM from 'react-dom';


const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} onClick={handleClick} className="FanchButton">
        {props.children}
    </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();

const handleClick = () => {
    console.log(ref);
};

const App = () => {
    return(        
        <FancyButton ref={ref}>Click me!</FancyButton>
    );
};

export default App;