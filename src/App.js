import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import Template from "./pages/Template";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/resume-templates" component={Template} />
      </Switch>
    </Router>
  );
};

export default App;
