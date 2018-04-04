import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import * as actionCreators from "./actionCreators";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter
          value={this.props.value}
          onIncrement={this.props.INCREMENT}
          onDecrement={this.props.DECREMENT}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    value: state
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(
    {
      INCREMENT: actionCreators.INCREMENT,
      DECREMENT: actionCreators.DECREMENT
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
