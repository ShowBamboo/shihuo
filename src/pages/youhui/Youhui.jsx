import React, { Component } from "react";

import Search from "components/search/Search";
import Yhq from "./Yhq";
import Temai from "./Temai";
import Advert from "./Advert";
import Menu from "./Menu";
import List from "./List";

export class youhui extends Component {
  state = {
    value: "搜索全网低价好券",
    bgColor: "#f0f3f5"
  };
  render() {
    return (
      <>
        <Search title={this.state.value} bgColor={this.state.bgColor}></Search>
        <Yhq></Yhq>
        <Temai></Temai>
        <Advert></Advert>
        <Menu></Menu>
        <List></List>
      </>
    );
  }
}

export default youhui;
