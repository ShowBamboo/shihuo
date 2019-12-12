import React, { Component } from "react";

import { BannerWrap } from "./styledBanner";

export class Banner extends Component {
  render() {
    return (
      <BannerWrap>
        <div className="banner-area">
          <div className="bg-img">
            <img src={this.props.msg.img} className="bg-loding-img" alt="" />
          </div>
          <a className="click" href="http://m.shihuo.cn/basketball">
            <div className="bg-color"></div>
            <div className="ban-txt">
              <div className="h2">
                <s>{this.props.msg.title}</s>
                {this.props.msg.englishTitle}
                <img
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
                  alt=""
                />
              </div>
              <div className="txt">
                <p></p>
                <p>{this.props.msg.subTitle}</p>
              </div>
              <div className="list clearfix" style={{ marginTop: 0 }}></div>
              <div className="left">
                <img
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
                  alt=""
                />
              </div>
              <div className="right">
                <img
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
                  alt=""
                />
              </div>
            </div>
          </a>
        </div>
      </BannerWrap>
    );
  }
}

export default Banner;
