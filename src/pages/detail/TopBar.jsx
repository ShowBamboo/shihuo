import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { TopBarWrap } from "./styledDetail";

export default withRouter(function TopBar(props) {
  const [state, setstate] = useState("none");
  let handleClick = () => {
    if (state === "none") {
      setstate("block");
    } else {
      setstate("none");
    }
  };

  let goBack = () => {
    props.history.goBack();
  };

  let goHome = () => {
    props.history.push("/index/home");
  };

  let goUser = () => {
    props.history.push("/index/user");
  };

  return (
    <TopBarWrap>
      <div className="top_bar">
        <div className="goback" onClick={goBack}>
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
            alt=""
          />
        </div>
        <span className="d-title">信息详情</span>
        <div className="ico_list" onClick={handleClick}>
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
            alt=""
          />
        </div>
        <div className="header_nav" id="header_nav" style={{ display: state }}>
          <div className="inner">
            <ul>
              <li onClick={goHome}>
                <a href="javascripts:;" className="icons index">
                  首页
                </a>
              </li>
              <li onClick={goUser}>
                <a href="javascripts:;" className="icons me">
                  我的
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="scroll_top">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/top_11d5d37.png"
            alt=""
          />
        </div> */}
      </div>
    </TopBarWrap>
  );
});
