import React, { useState } from "react";

import { TopBarWrap } from "./styledDetail";

export default function TopBar() {
  const [state, setstate] = useState("none");
  let handleClick = () => {
    if (state === "none") {
      setstate("block");
    } else {
      setstate("none");
    }
  };
  return (
    <TopBarWrap>
      <div className="top_bar   ">
        <div className="goback">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
            alt=""
          />
        </div>
        <span className="d-title">Nike Air Force 1</span>
        <div className="ico_list" onClick={handleClick}>
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
            alt=""
          />
        </div>
        <div className="header_nav" id="header_nav" style={{ display: state }}>
          <div className="inner">
            <ul>
              <li>
                <a
                  href="//m.shihuo.cn#qk=gd&amp;order=1"
                  className="icons index"
                >
                  首页
                </a>
              </li>
              <li>
                <a
                  href="//m.shihuo.cn/user#qk=gd&amp;order=8"
                  className="icons me"
                >
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
}
