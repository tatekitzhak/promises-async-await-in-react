import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useLocation, useParams } from "react-router-dom";

import Topics from './pages/topics';
import SideBar from './sideBar';
import Item from './pages/item';

function Task1(props) {
  const param = props.match.path;
  const { path } = useRouteMatch();
  return (
    <Router>
      <div className="row">

        <div className="col-md-3 pull-md-right">
          {/* <SidebarProvider>
            <SideBar {...props}>
              <h1>Side Bar </h1>
            </SideBar>
          </SidebarProvider> */}
          <Link to={`${param}/item-1`} className="nav-link">item 1</Link>
          <Link to={`${param}/item-2`} className="nav-link">item 2</Link>
          <Link to={`${param}/item-3`} className="nav-link">item 3</Link>
          <Link to={`${param}/item-4`} className="nav-link">item 4</Link>
          <Link to={`${param}/item-5`} className="nav-link">item 5</Link>
          <Link to={`${param}/item-6`} className="nav-link">item 6</Link>
        </div>

        <div className="col-md-8 pull-md-right border">
          {console.log('Task1:', props.match)}
          <Switch>
              <Route exact path={`${param}`}
                      render={(props) => <Topics {...props} msg={'From Task1 To Topics'} />} />

              <Route exact path={`/:link/:link`}
                      render={(props) => <Item {...props} msg={'From Task1 To Item'} />} />

          </Switch>
        </div>
      </div>
    </Router>
  );

};

export default Task1;
