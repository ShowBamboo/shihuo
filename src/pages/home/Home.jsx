import React, { Component } from "react";

import Banner from "./Banner";
import Search from "components/search/Search";
import PicBanner from "./PicBanner";
import Hot from "./Hot";
import HotActivity from "./HotActivity";
import List from "./list/List";

class Home extends Component {
  state = {
    value: "搜索商品，品牌"
  };
  render() {
    return (
      <>
        <Banner></Banner>
        <Search title={this.state.value}></Search>
        <PicBanner></PicBanner>
        <Hot></Hot>
        <HotActivity></HotActivity>
        <List></List>
      </>
    );
  }
}

export default Home;
