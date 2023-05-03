import './App.css';
import React, { Component} from 'react';
import Navbar from  './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component{

  
  render(){
    return(
      <Router>

      <div>
        
        <Navbar/>
        <Switch>
          <Route exact path ="/"><News key="general" country='in' category="general" pageSize={5} /></Route>
          <Route exact path="/business"  ><News  key="business" country='in' category="business" pageSize={5} /></Route>
          <Route exact path="/entertainment" ><News key="entertainment" country='in' category="entertainment" pageSize={5} /></Route>
          <Route exact path="/general" ><News key="general" country='in' category="general" pageSize={5} /></Route>
          <Route exact path="/health" ><News key="health" country='in' category="health" pageSize={5} /></Route>
          <Route exact path="/science" ><News key="science" country='in' category="science" pageSize={5} /></Route>
          <Route exact path="/sports" ><News key="sports" country='in' category="sports" pageSize={5} /></Route>
          <Route exact path="/technology" ><News key="technology" country='in' category="technology" pageSize={5} /></Route>
        </Switch>
        </div>
        
        </Router>
        
        
    )
  }
}