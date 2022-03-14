import React from 'react';
import ReactDOM from 'react-dom';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current them (with "light" as the default).
const ThemeContext = React.createContext('light') 

class App extends React.Component {
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "dark" as the current value.
        return (
            <ThemeContext.Provider value="dark">
                <ToolBar />
            </ThemeContext.Provider>
        );
    }
}  

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function ToolBar(){
    return (
        <div>
            <ThemedButton />
        </div>
    );
}


function Button(){
    return(
        <div>
            <button />
        </div>
    );
}

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest them Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render(){
        return <Button theme={this.context} />;
    }
}


/*
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
*/
export default App;