import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom";

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </Suspense>
    </Router>,
    document.getElementById('root')
);