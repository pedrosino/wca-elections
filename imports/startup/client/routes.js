import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '/imports/ui/containers/AppContainer';
import HomeContainer from '/imports/ui/containers/HomeContainer';
import BlogContainer from '/imports/ui/containers/BlogContainer';

FlowRouter.route('/', {
  name: "home",
  action: function(params, queryParams) {
    mount(AppContainer, {
      content: <HomeContainer />,
    });
  }
});

FlowRouter.route('/blog/', {
  name: "blog",
  action: function(params, queryParams) {
    mount(AppContainer, {
      content: <BlogContainer />,
    });
  }
});
