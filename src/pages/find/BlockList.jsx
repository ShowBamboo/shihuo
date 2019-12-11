import React, { Component } from "react";

import { BlockListWrap } from "./styledBlockList";

export class BlockList extends Component {
  render() {
    return (
      <BlockListWrap>
        <div className="block_list clearfix">
          <a href="javascripts:;" className="list">
            众测
          </a>
          <a href="javascripts:;" className="list">
            栏目
          </a>
          <a href="javascripts:;" className="list">
            最新
          </a>
          <a href="javascripts:;" className="list">
            最热
          </a>
        </div>
      </BlockListWrap>
    );
  }
}

export default BlockList;
