import './App.css'; // APP이라는 컴포넌트의 디자인은 App.js 안에 넣는다는 의미.
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, React!!
      </div>
    );
  }
}

export default App;
