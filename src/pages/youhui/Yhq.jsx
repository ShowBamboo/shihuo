/* eslint-disable */
import React, { Component } from "react";

import { YhqWrap } from "./styledYhq";

export class Yhq extends Component {
  render() {
    return (
      <YhqWrap>
        <div className="yhq">
          已收集&nbsp;<span>0</span>&nbsp;张优惠券
          <a
            className="zn fr"
            href="http://m.shihuo.cn/app/html/shihuoMobile/souquan.html"
          ></a>
        </div>
      </YhqWrap>
    );
  }
}

export default Yhq;
