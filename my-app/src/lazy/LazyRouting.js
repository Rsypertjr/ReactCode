import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (

    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
            </Switch>
        </Suspense>
    </Router>
);

ReactDOM.render(

    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
