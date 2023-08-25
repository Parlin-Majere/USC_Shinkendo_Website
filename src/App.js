import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import NavBar from "./Components/nav_bar.js"
import Home from "./pages/Home/Home.js"
import About from "./pages/About/About.js"
import Join from "./pages/Join/Join.js"
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

function App() {
  let Component 
  switch(window.location.pathname){
    case "/":
      Component = <Home />
      break
    case "/About":
      Component = <About/>
      break
    case "/Join":
      Component = <Join/>
      break 
    case "/Home":
      Component = <Home />
      break
  }
  return (
    <>
     <NavBar/>
      <div id = "Container">
        {Component}
      </div>
    </>
  );
}

export default App;
