import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ResinGuide from "./components/ResinGuide";

function App() {
  return (
    <Router>
      <div className="header">
        <NavBar />
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
        <Route path='/resin'>
          <ResinGuide />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
