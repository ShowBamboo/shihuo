import React, { Component } from "react";

import { TagWrap } from "./styledTag";

export class Tag extends Component {
  render() {
    return (
      <TagWrap>
        <div className="tag-area">
          <div className="tag-list">
            <a href="javascripts:;">{this.props.tag[0]}</a>
            <a href="javascripts:;">{this.props.tag[1]}</a>
            <a href="javascripts:;">{this.props.tag[2]}</a>
            <a href="javascripts:;">
              {this.props.tag[3]}
              <img
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
                alt=""
              />
            </a>
          </div>
          <div className="tag-list">
            <a href="javascripts:;">{this.props.tag[4]}</a>
            <a href="javascripts:;">{this.props.tag[5]}</a>
            <a href="javascripts:;">{this.props.tag[6]}</a>
            <a href="javascripts:;">
              {this.props.tag[7]}
              <img
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </TagWrap>
    );
  }
}

export default Tag;
