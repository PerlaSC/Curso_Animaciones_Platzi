import React from "react";
import logo from "./logo.svg";
import "./App.css";
import logoPlatzi from './platzi.png'
import CSSTransitionGroup from 'react-addons-css-transition-group'

function App() {
  state = {
    logo:logo,
  }
  onClick() {
this.setState({
  logo: logoPlatzi
})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img key={this.state.logo} src={this.state.logo} className="App-logo" alt="logo" />
        <CSSTransitionGroup transitionName='fade' transitionEnterTimeout={2000} transitionLeaveTimeout={1000} />
        <h1> Hello world ! </h1>{" "}
        <buttom onClick={this.onClick.bind(this)}>click me!</buttom>
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
