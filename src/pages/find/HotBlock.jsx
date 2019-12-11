import React, { Component } from "react";

import { HotBlockWrap } from "./styledHotBlock";

export class HotBlock extends Component {
  render() {
    return (
      <HotBlockWrap>
        <div className="hotBlock">
          <div className="title">热门话题</div>
          <div
            className="slide-container swiper-container-horizontal swiper-container-free-mode"
            data-swiper="[object Object]"
          >
            <div
              className="swiper-wrapper"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-16.3889px, 0px, 0px)"
              }}
            >
              <div
                className="swiper-slide swiper-slide-active"
                style={{ width: "131.963px" }}
              >
                <a href="javascripts:;">
                  <div className="imgs">
                    <img
                      src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
                      alt=""
                      className="lazy"
                    />
                  </div>
                  <div className="blackbg">
                    <p># 晒穿搭，AJ11 CONCORD 领回家！！ #</p>
                  </div>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                style={{ width: "131.963px" }}
              >
                <a href="javascripts:;">
                  <div className="imgs">
                    <img
                      src="http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg"
                      alt=""
                      className="lazy"
                    />
                  </div>
                  <div className="blackbg">
                    <p># 限时下单 全场返利 #</p>
                  </div>
                </a>
              </div>
              <div className="swiper-slide" style={{ width: "131.963px " }}>
                <a href="javascripts:;">
                  <div className="imgs">
                    <img
                      src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png"
                      alt=""
                      className="lazy"
                    />
                  </div>
                  <div className="blackbg">
                    <p># 晒照赢新年康扣 #</p>
                  </div>
                </a>
              </div>
              <div className="look-more">查看更多</div>
            </div>
          </div>
        </div>
      </HotBlockWrap>
    );
  }
}

export default HotBlock;
