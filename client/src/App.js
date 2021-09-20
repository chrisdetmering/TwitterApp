import './style.css';
import React from 'react'
import { Route } from 'react-router';
import Home from "./Home"
import TwitterSearch from "./TwitterSearch"
import TwitterLive from "./TwitterLive"
import NavBar from "./components/NavBar"


export default function App() {
  return (
    <div className="App">
      <div id="app-body">
      <h1 id="main-title">Team Tweets Live</h1>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/TwitterSearch" component={TwitterSearch} />
      <Route exact path="/TwitterLive" component={TwitterLive} />
      </div>
    </div>
  )
}

