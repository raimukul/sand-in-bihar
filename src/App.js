  
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Index";
import Login from './Components/Login/login'
import Signup from './Components/Signup/signup'

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/signup' component={Signup} />
      </Router>
    </div>
  );
}