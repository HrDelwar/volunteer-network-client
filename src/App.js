import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddEvents from './components/AddEvents/AddEvents';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/events">
          <AddEvents />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
