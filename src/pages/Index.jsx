import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Detail from "./detail/Detail";
import Layout from "./Layout";
import Search from "./search/Search";
import SearchResult from "./search/SearchResult";

export default function Index() {
  return (
    <Switch>
      <Route path="/index" render={() => <Layout></Layout>}></Route>
      <Route path="/detail" render={() => <Detail></Detail>}></Route>
      <Route path="/search" render={() => <Search></Search>}></Route>
      <Route
        path="/searchResult"
        render={() => <SearchResult></SearchResult>}
      ></Route>
      <Redirect from="/" to="/index/home"></Redirect>
    </Switch>
  );
}
