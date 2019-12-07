import React, { Component } from "react";

import { HotWrap } from "./styledHot";

export class Hot extends Component {
  render() {
    return (
      <HotWrap>
        <section className="hot clearfix">
          <a className="block" href="http://m.shihuo.cn/youhui#qk=jryouhui">
            <h2>今日优惠</h2>
            <p className="desc">EQT 5折好价</p>
            <p className="imgs">
              <img
                src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
                alt="今日优惠"
              />
            </p>
          </a>
          <a className="block" href="http://m.shihuo.cn/tuangou#qk=tuangou">
            <h2>限时团购</h2>
            <p className="desc">春节不打烊</p>
            <p className="imgs">
              <img
                src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1"
                alt="限时团购"
              />
            </p>
          </a>
          <a
            className="block"
            href="http://www.shihuo.cn/app/assets/lucky_draw_new/1.0.0/index.html#qk=haitao"
          >
            <h2>免费抽奖</h2>
            <p className="desc">识货抽奖 天天免费</p>
            <p className="imgs">
              <img
                src="http://shihuo.hupucdn.com/kupload2018/2019715/15631798110000.jpeg?imageView2/2/w/120/h/120/interlace/1"
                alt="免费抽奖"
              />
            </p>
          </a>
        </section>
      </HotWrap>
    );
  }
}

export default Hot;
