import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/about">
          About
        </Route>
        <Route path="/guides">
          Guides
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
