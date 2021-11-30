import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ResinGuide from "./components/ResinGuide/ResinGuide";
import LiquidCableGuide from "./components/LiquidCableGuide/LiquidCableGuide";
import Portfolio from "./components/Portfolio/Portfolio";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/guide/resin'>
            <ResinGuide />
          </Route>
          <Route path='/guide/liquid'>
            <LiquidCableGuide />
          </Route>
        </Switch>
        
        <Footer />
        <p style={{display: 'flex', justifyContent: 'center', margin: '0', padding: '0 10px 0 0', fontSize: '10px', backgroundColor: "rgb(73, 73, 73)"}}>Created 2021</p>
      </Router>
    </div>
  );
}

export default App;
