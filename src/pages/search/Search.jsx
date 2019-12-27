/* eslint-disable */
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { get } from "utils/http";

import { SearchWrap } from "./styledSearch";

function Search(props) {
  const [reset, setreset] = useState("none");
  const [data, setdata] = useState([]);

  let change = async e => {
    if (e.target.value) {
      setreset("inline-block");
    } else {
      setreset("none");
    }

    let result = await get({
      url: `/api/search/relatedKeywords?keywords=${e.target.value}`
    });
    setdata(result.data);
  };

  // 点击标签
  let Search = e => {
    props.history.push({
      pathname: "/searchResult",
      query: {
        keywords: e.target.innerHTML
      }
    });
  };

  let cancel = () => {
    props.history.goBack();
  };

  //点击提示列表
  let handleClick = keywords => {
    return () => {
      props.history.push({
        pathname: "/searchResult",
        query: {
          keywords
        }
      });
    };
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
                autoFocus="autofocus"
                onChange={change}
              />
              <input
                type="reset"
                className="sh_searchClear"
                title="重置搜索词"
                style={{ display: reset }}
              />
            </div>
            <a href="javascripts:;" className="cancel show" onClick={cancel}>
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
              <a href="javascripts:;" onClick={Search}>
                红包
              </a>
              <a href="javascripts:;" onClick={Search}>
                AJ11
              </a>
              <a href="javascripts:;" onClick={Search}>
                欧文4
              </a>
              <a href="javascripts:;" onClick={Search}>
                LBJ15
              </a>
              <a href="javascripts:;" onClick={Search}>
                ultra boost
              </a>
              <a href="javascripts:;" onClick={Search}>
                Jordan
              </a>
              <a href="javascripts:;" onClick={Search}>
                Air force 1
              </a>
              <a href="javascripts:;" onClick={Search}>
                球鞋90秒
              </a>
              <a href="javascripts:;" onClick={Search}>
                React
              </a>
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
        <div className="inner" id="searchRelate" style={{ display: reset }}>
          <ul>
            {data.map((value, index) => (
              <li key={index} onClick={handleClick(value)}>
                <a href="javascripts:;">{value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SearchWrap>
  );
}

export default withRouter(Search);
