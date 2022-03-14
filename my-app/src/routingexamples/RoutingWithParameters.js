// import reactRouterDOM from "https://unpkg.com/react-router-dom@4.0.0/umd/react-router-dom.min.js";

/*const {
  HashRouter,
  Switch,
  Route,
  Link
} = ReactRouterDOM*/

import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import { withRouter } from "react-router";


/*
    const HashRouter = ReactRouterDOM.HashRouter;
    const Switch = ReactRouterDOM.Switch;
    const Route = ReactRouterDOM.Route;
    const Link = ReactRouterDOM.Link;
*/

 
const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() {
    return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer);
  }
}

const FullRoster = () => (
  <div>
      <ul>
            {
           
                PlayerAPI.all().map( (p) => (
                        <li key={p.number}>
                            <Link to={`/roster/${p.number}`}> {p.name} </Link>
                        </li>
                    ))
            }
      </ul>
  </div>
  )


const Player = (props) => { 

    console.log(props);
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
   
    
    if(!player){
        return <div>Player not found!</div>
    }
        return (
            <div>
                <h1>{player.name} #{player.number}</h1>
                <h2>Position: {player.position}</h2>
                <Link to="/roster"> Back </Link>
            </div>
        )

  
}


const PlayerWithRouter = withRouter(Player);

const Roster = () => (
      <Switch>
        <Route path= "/roster" component={FullRoster}/>
        <Route path= "/roster/:number" component={Player}/>
      </Switch>
  )

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
  )


const Home = () =>  (
    <div>
      <h1>Welcome to the team roster thing</h1>
    </div>
  )


const Main = () => (
  
    <Switch>
      <Route exact path="/" component= {Home} />
      <Route path="/roster/:number" component= {Player} />   
      <Route path="/roster" component={FullRoster} />
      <Route path="/schedule" component= {Schedule} />
    </Switch>
  )

const Header = () =>  (
  
    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/roster">Roster</Link> </li>
        <li> <Link to="/schedule">Schedule</Link> </li>
      </ul>
    </nav>
 
   )


const App = () => (
  
    <div>
      <Header />
      <Main />
    </div>
  
)

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
