import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero";
import Intro from "./Intro";
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Projects from "./Projects";

export const history = createHistory();

function Main() {
  return (
    <main className="mainBody">
      <NavBar history={history}/>
      <Router history={history}>
        <Switch>
            <Route 
                exact
                path={'/'}
                component={(props) => <Hero {...props} />}
            />
            <Route 
                exact
                path={'/about'}
                component={(props) => <Intro {...props}/>}
            />
            <Route 
                exact
                path={'/projects'}
                component={(props) => <Projects {...props}/>}
            />
        </Switch>
      </Router>
    </main>
  );
}

export default Main;