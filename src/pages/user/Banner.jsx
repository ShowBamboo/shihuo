import React from "react";

import { BannerWrap } from "./styledBanner";

export default function Banner() {
  return (
    <BannerWrap>
      <div className="banner_block">
        <div className="userface">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png"
            alt=""
          />
        </div>
        <div className="login">
          <a href="javascripts:;">登录</a>
          <a href="javascripts:;">注册</a>
          <p className="jb">金币 0</p>
        </div>
      </div>
    </BannerWrap>
  );
}
