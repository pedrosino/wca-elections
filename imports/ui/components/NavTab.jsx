// Created by jfly. Inspired by:
//  https://github.com/reactjs/react-router/issues/666#issuecomment-90969506

import React from 'react';
import { Link } from 'react-router';

export default NavTab = React.createClass({
  contextTypes: {
    router: React.PropTypes.object,
  },

  render() {
    const { to, query, hash, state, onlyActiveOnIndex } = this.props;
    const location = { pathname: to, query, hash, state };

    let isActive = this.context.router.isActive(location, onlyActiveOnIndex);
    let className = isActive ? 'active' : '';
    let link = (
      <Link {...this.props} />
    );
    return <li className={className}>{link}</li>;
  },
});
