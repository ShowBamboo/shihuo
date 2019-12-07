import React, { Component } from "react";

import Banner from "./Banner";
import Search from "./Search";
import PicBanner from "./PicBanner";
import Hot from "./Hot";
import HotActivity from "./HotActivity";
import List from "./list/List";

class Home extends Component {
  render() {
    return (
      <>
        <Banner></Banner>
        <Search></Search>
        <PicBanner></PicBanner>
        <Hot></Hot>
        <HotActivity></HotActivity>
        <List></List>
      </>
    );
  }
}

export default Home;
