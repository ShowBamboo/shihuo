import React, { Component } from "react";

import { SearchWrap } from "./styledSearch.js";

class Search extends Component {
  render() {
    return (
      <SearchWrap>
        <div className="search_bar">
          <form
            action="//m.shihuo.cn/search/searchResult/all"
            id="searchBox"
            method="get"
            className="searchBox"
          >
            <div className="search_box">
              <div className="search">
                <input
                  type="text"
                  className="input"
                  name="keywords"
                  value=""
                  placeholder="搜索商品，品牌"
                  id="searchVal"
                  readOnly={true}
                />
              </div>
              <a href="//m.shihuo.cn/user#qk=t_gr" className="me">
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
