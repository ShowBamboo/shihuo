import React, { Component } from "react";

import { MenuWrap } from "./styledMenu";

export class Menu extends Component {
  render() {
    return (
      <MenuWrap>
        <div className="menu-area">
          <ul className="clearfix">
            <li>
              <a href="javascrpts:;">热销排行</a>
            </li>
            <li>
              <a href="javascrpts:;">好价精选</a>
            </li>
            <li>
              <a href="javascrpts:;">当季新款</a>
            </li>
          </ul>
        </div>
      </MenuWrap>
    );
  }
}

export default Menu;
