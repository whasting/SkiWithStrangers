import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import ResortsIndexContainer from './resorts/resorts_index_container';
import ResortsDetailContainer from './resorts/resorts_detail_container';
import SessionFormContainer from './session_form/session_form_container';
import EventsContainer from './events/events_container';
import EventDetailContainer from './events/events_container';
import DashboardContainer from './dashboard/dashboard_container';
import HostFormContainer from './host_form/host_form_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute
            component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}/>
          <Route path='/login'
            component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}/>
          <Route
              path='/signup'
              component={ SessionFormContainer }
              onEnter={_redirectIfLoggedIn}/>
          <Route
            path='/resorts'
            component={ ResortsIndexContainer }
            onEnter={_ensureLoggedIn}>
            <Route
              path='/resorts/:id'
              component={ ResortsDetailContainer }
              onEnter={_ensureLoggedIn}>
              <Route
                path='/resorts/:id/event/:id'
                component={ EventsContainer }
                onEnter={_ensureLoggedIn} />
              <Route
                path='/resorts/:id/create-event'
                component={ HostFormContainer }
                onEnter={_ensureLoggedIn} />
            </ Route>
          </ Route>
          <Route
            path='/dashboard'
            component={ DashboardContainer }
            onEnter={_ensureLoggedIn} >
            <Route
              path='/dashboard/event/:id'
              component={ EventsContainer }
              onEnter={_ensureLoggedIn} />
          </ Route>
        </ Route>
      </Router>
    </Provider>
  );
};

export default Root;
