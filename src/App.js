import React, { Component } from "react";
import Layout from "./pages/Layout";
import "assets/styles/reset.css";

import { Provider } from "react-redux";
import store from "./store/index";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );
  }
}

export default App;
