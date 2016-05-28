import React from 'react';
import { IndexLink, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import BlazeToReact from '/imports/ui/BlazeToReact';
import NavTab from '/imports/ui/NavTab';

const App = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>
);

const Navbar = ({}) => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/" className="navbar-brand">WCA Elections</Link>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <NavTab to="/" onlyActiveOnIndex={true}>Home</NavTab>
          <NavTab to="/vote">Vote</NavTab>
        </ul>

        <BlazeToReact wrapperTag="ul" wrapperClass="nav navbar-nav navbar-right" blazeTemplate="_loginButtons" /> 
      </div>
    </div>
  </nav>  
);

export default AppContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, App);
