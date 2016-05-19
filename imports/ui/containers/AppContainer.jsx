import React from 'react';
import BlazeToReact from '/imports/ui/BlazeToReact';
import { createContainer } from 'meteor/react-meteor-data';

const App = ({content}) => (
  <div>
    <Navbar />
    {content}
  </div>
);

const Navbar = () => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">WCA Elections</a>
      </div>

      <div className="collapse navbar-collapse">
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
