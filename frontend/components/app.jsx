import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return (
    <div>
      <GreetingContainer />
      <div className="splash-container">
        <div className="splash">
          {children}
        </div>
      </div>
    </div>
  );
};
export default App;
