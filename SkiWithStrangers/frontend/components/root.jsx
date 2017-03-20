import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import ResortsIndexContainer from './resorts/resorts_index_container';
import ResortsDetailContainer from './resorts/resorts_detail_container';
import SessionFormContainer from './session_form/session_form_container';
import EventsContainer from './greeting/greeting_container';

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
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ SessionFormContainer } />
          <Route path='/login'
            component={ SessionFormContainer }/>
          <Route
              path='/signup'
              component={ SessionFormContainer }/>
          <Route
            path='/resorts'
            component={ ResortsIndexContainer }
            onEnter={_ensureLoggedIn}>
            <Route
              path='/resorts/:id'
              component={ ResortsDetailContainer } />
          </ Route>
        </ Route>
      </Router>
    </Provider>
  );
};

export default Root;
