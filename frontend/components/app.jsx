import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children }) => {
  console.log(children);
  return (
  <div>
    <GreetingContainer />
    {children}
  </div>
);
};
export default App;
