import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ResinGuide from "./components/ResinGuide/ResinGuide";
import LiquidCableGuide from "./components/LiquidCableGuide/LiquidCableGuide";
import Portfolio from "./components/Portfolio/Portfolio";
import "./styles/global.css";
import Guide from "./components/Guide/Guide";
import AlertBanner from "./components/AlertBanner/AlertBanner";
import { Helmet } from "react-helmet";
import Events from "./components/Events/Events";
import { ApolloProvider } from "@apollo/client";
import withApollo from "./utils/GQL/withApollo";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Frame Perfect Controllers</title>
        <link rel="canonical" href="https://www.wavedash.tech" />
      </Helmet>
      <ApolloProvider client={withApollo}>
        <Router>
          <NavBar />
          {/* <AlertBanner
            text={"Extra stock from TBH10 & Genesis 9 are now live on my shop!"}
            link={"https://frameperfectcontrollers.bigcartel.com"}
          /> */}
          {/* <AlertBanner text={"Check out the parts I made in the Panda Controller Promo video!"} link={"https://twitter.com/PandaGlobal/status/1466059682552766469?s=20"}/> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route exact path="/guide">
              <Guide />
            </Route>
            <Route path="/guide/resin">
              <ResinGuide />
            </Route>
            <Route path="/guide/liquid">
              <LiquidCableGuide />
            </Route>
          </Switch>

          <Footer />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0",
              padding: "0 10px 0 0",
              fontSize: "10px",
              backgroundColor: "rgb(73, 73, 73)",
            }}
          >
            Created 2021
          </p>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
