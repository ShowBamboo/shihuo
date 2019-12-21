import React, { Component } from "react";
// import Layout from "./pages/Layout";
import Index from "./pages/Index.jsx";
import "assets/styles/reset.css";

import { Provider } from "react-redux";
import store from "./store/index";

import { BrowserRouter as Router } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Index></Index>
        </Router>
      </Provider>
    );
  }
}

export default App;
