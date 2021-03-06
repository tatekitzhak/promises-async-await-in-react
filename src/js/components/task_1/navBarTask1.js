import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {SideNavBarContext} from '../../../global_state_management/sideNavBarProvider'

function NavigationBar(props){
  const [topics, setTopics] = useContext(SideNavBarContext);

  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>Navigation Bar Task 1</h1>
              </div>
              <div className="list-group list-group-flush">
                {
                  topics.map((value, index)=>{
                      return (
                          <Link className="list-group-item list-group-item-action list-group-item-light p-3"
                                data-txt={`${value.categorie}`}
                                key={index}
                                to={{
                                      pathname:`${props.match.path}/${value.categorie}`,
                                      state: { fromNotifications: true,
                                               value: []
                                             }
                                      }}>
                          {value.categorie}
                          </Link>
                        )
                      })
                }

              </div>
          </div>
      </div>
    </>
  );
};


export default NavigationBar;
