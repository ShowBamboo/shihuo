import React, { useState } from "react";

import { SearchWrap } from "./styledSearch";

export default function Search() {
  const [reset, setreset] = useState("none");
  let change = e => {
    if (e.target.value) {
      setreset("inline-block");
    } else {
      setreset("none");
    }
  };
  return (
    <SearchWrap>
      <div className="search_bar">
        <form
          action="//m.shihuo.cn/search/searchResult/all"
          id="searchBox"
          method="get"
          className="searchBox"
          style={{ background: "rgba(221, 23, 18, 0)" }}
        >
          <div
            className="search_box"
            style={{ background: "rgb(247, 247, 247)" }}
          >
            <div className="search focus">
              <input
                type="text"
                className="input focus"
                name="keywords"
                placeholder="搜索商品，品牌"
                id="searchVal"
                onChange={change}
              />
              <input
                type="reset"
                className="sh_searchClear"
                title="重置搜索词"
                style={{ display: reset }}
              />
            </div>
            <a
              href="//m.shihuo.cn/user#qk=t_gr"
              className="me"
              style={{ display: "none" }}
            >
              <img
                src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png"
                alt=""
              />
            </a>
            <a href="javascripts:;" className="cancel show">
              取消
            </a>
          </div>
        </form>
      </div>
      <div className="search_page" id="search-page">
        <div className="inner" id="searchWrapper">
          <dl>
            <dt>热门搜索</dt>
            <dd className="sear_hot">
              <a href="javascripts:;"></a>
              <a href="javascripts:;">红包</a>
              <a href="javascripts:;">AJ11</a>
              <a href="javascripts:;">欧文4</a>
              <a href="javascripts:;">LBJ15</a>
              <a href="javascripts:;">ultra boost</a>
              <a href="javascripts:;">Jordan</a>
              <a href="javascripts:;">Air force 1</a>
              <a href="javascripts:;">球鞋90秒</a>
              <a href="javascripts:;">React</a>
            </dd>
            <dt className="his" style={{ display: "none" }}>
              历史搜索
            </dt>
            <dd className="sear_record clearfix">
              <ul id="history" className="his" style={{ display: "none" }}></ul>
            </dd>
            <dd>
              <p className="clear_history his" style={{ display: "none" }}>
                <a href="javascripts:;" id="clear_history">
                  清空历史记录
                </a>
              </p>
            </dd>
          </dl>
        </div>
        <div className="inner" id="searchRelate" style={{ display: "none" }}>
          <ul>
            <li>
              <a href="javascripts:;">eqt</a>
            </li>
            <li>
              <a href="/search/searchResult/all?keywords=耳机">耳机</a>
            </li>
          </ul>
        </div>
      </div>
    </SearchWrap>
  );
}