import React from 'react';
import GreetingContainer from './greeting/greeting_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
          <GreetingContainer />
          <div className="splash-container">
            <div className="splash">
            {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
