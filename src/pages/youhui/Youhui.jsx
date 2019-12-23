import React, { Component } from "react";

import Search from "components/search/Search";
import Yhq from "./Yhq";
import Temai from "./Temai";
import Advert from "./Advert";
import Menu from "./Menu";
import List from "./List";
import GoTop from "components/goTop/GoTop";
import MenuList from "./MenuList";

export class youhui extends Component {
  state = {
    value: "搜索全网低价好券",
    bgColor: "#f0f3f5",
    position: "static"
  };
  render() {
    return (
      <div id="youhuiWrap" style={{ height: "100%" }}>
        <div style={{ height: "max-content" }}>
          <Search
            title={this.state.value}
            bgColor={this.state.bgColor}
            position={this.state.position}
          ></Search>
          <Yhq></Yhq>
          <Temai></Temai>
          <Advert></Advert>
          <Menu></Menu>
          <List></List>
          <GoTop></GoTop>
        </div>
        <MenuList></MenuList>
      </div>
    );
  }
}

export default youhui;
