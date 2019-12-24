import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SearchWrap } from "./styledSearch";

@withRouter
class Search extends Component {
  goSearch = () => {
    this.props.history.push("/search");
  };
  goUser = () => {
    this.props.history.push("/index/user");
  };

  render() {
    return (
      <SearchWrap>
        <div
          className="search_bar"
          style={{
            background: this.props.bgColor,
            position: this.props.position
          }}
        >
          <form
            action="//m.shihuo.cn/search/searchResult/all"
            id="searchBox"
            method="get"
            className="searchBox"
          >
            <div className="search_box">
              <div className="search" onClick={this.goSearch}>
                <input
                  type="text"
                  className="input"
                  name="keywords"
                  value=""
                  placeholder={this.props.title}
                  id="searchVal"
                  readOnly={true}
                  style={{ backgroundColor: this.props.inputBg }}
                />
              </div>
              <a href="javascripts:;" className="me" onClick={this.goUser}>
                <img
                  src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png"
                  alt=""
                />
              </a>
            </div>
          </form>
        </div>
      </SearchWrap>
    );
  }
}

export default Search;
