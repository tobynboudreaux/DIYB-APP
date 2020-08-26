import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
      </Fragment>
    </Router>
  );
};

export default App;
