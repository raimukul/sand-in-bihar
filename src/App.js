  
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Index";

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}