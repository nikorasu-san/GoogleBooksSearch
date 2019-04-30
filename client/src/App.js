import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Search from "./pages/Search"
import Jumbotron from "./components/Jumbotron"
import Saved from './pages/Saved';

function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <div className="container">
          <br />
          <Jumbotron />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
