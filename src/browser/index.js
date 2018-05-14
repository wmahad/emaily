import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  render() {
    return (
      <div>
        Welcome, express meet react.
        <br />
        <a href="#">Sign in With Google</a>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app-container'));
