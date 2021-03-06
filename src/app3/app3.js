import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import Home from './ui-components/homePage/home';
import Task1 from './ui-components/task1/task1';
import Task2 from './ui-components/task2/task2';
import Items from './ui-components/items-results/items';
import Element from './ui-components/items-results/element';
import Footer from "./ui-components/footer/footer";
/* 

import Task4 from "./task-4/task4";
 
*/
import PageNotFound from './pageNotFound';

function App() {
  const history = useHistory()
  const location = useLocation()
  const routeMatch = useRouteMatch()
  return (
    <>
      {console.log('App history:', history)}
      {console.log('App location:', location.pathname)}
      {console.log('App routeMatch:', routeMatch.path)}
      {/* 
      <Header>
        <h1>Header NavBar</h1>
      </Header> 
      */}
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
          <div className="container">
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div><h1 className="text-white">CTXT</h1></div>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <Link to="/" className="nav-link text-uppercase"> Home</Link>
              <Link to="/task-1" className="nav-link text-uppercase"> Task 1</Link>
              <Link to="/task-2" className="nav-link text-uppercase">Task 2</Link>
              <Link to="/items" className="nav-link text-uppercase">Items</Link>
              <Link to="/element" className="nav-link text-uppercase" >Element</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="navbar container-fluid"> </div>
      <div className="contentWrapper container-fluid">
        <div className="content border ">

          <Switch>
            <Route exact path="/"
              render={(props) => <Home {...props} msg={'From App to Home'} />} />
            <Route exact path="/task-1"
              render={(props) => <Task1 {...props} msg={'From App to Task1'} />} />

            <Route exact path="/task-2"
              render={(props) => <Task2 {...props} msg={'From App to Task2'} />} />
             
            <Route exact path="/items"
              render={(props) => <Items {...props} msg={'From App to Items'} />} />
            
            <Route exact path="/element"
              render={(props) => <Element {...props} msg={'From App to Element'} />} />
           
            <Route
              render={(props) => <PageNotFound {...props} msg={'From App to PageNotFound'} />} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );

}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>, wrapper) : false;
