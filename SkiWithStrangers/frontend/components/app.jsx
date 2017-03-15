import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    <SessionFormContainer />
    {children}
  </div>
);

export default App;
