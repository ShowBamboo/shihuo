import React, { Component } from "react";

import { HotActivityWrap } from "./styledHotActivity";

export class HotActivity extends Component {
  render() {
    return (
      <HotActivityWrap>
        <section className="hot-activity clearfix">
          <h3>热门活动</h3>
          <ul>
            <li>
              <a href="http://www.shihuo.cn/app/assets/youhui/1.0.2/brandSale.html">
                <div className="img">
                  <img
                    src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg"
                    alt=""
                  />
                </div>
                <p className="p1">skullcandy骷髅头耳机</p>
                <p className="p2">
                  <span>券后低至89元起</span>
                </p>
              </a>
            </li>
            <li>
              <a href="http://www.shihuo.cn/article/detail/19901.html">
                <div className="img">
                  <img
                    src="http://shihuo.hupucdn.com/appZone/201811/1214/2720301b13ee5c2b0003f78125b698ea.jpg"
                    alt=""
                  />
                </div>
                <p className="p1">1000块包全身</p>
                <p className="p2">
                  <span>不说虚话</span>
                </p>
              </a>
            </li>
            <li>
              <a href="http://t.shihuo.cn/m/533.html">
                <div className="img">
                  <img
                    src="http://shihuo.hupucdn.com/appZone/201812/0411/e8dd17f83bc977f0d7014a077ed9d821.jpg"
                    alt=""
                  />
                </div>
                <p className="p1">怎么穿，显高且有范</p>
                <p className="p2">
                  <span>170+穿搭指南</span>
                </p>
              </a>
            </li>
            <li>
              <a href="http://www.shihuo.cn/article/detail/21332.html">
                <div className="img">
                  <img
                    src="http://shihuo.hupucdn.com/appZone/201811/2310/18c66c0697e87440978ffdc220ee7cf9.jpg"
                    alt=""
                  />
                </div>
                <p className="p1">潮流折扣日Vol.53</p>
                <p className="p2">
                  <span>别再错过专属优惠了</span>
                </p>
              </a>
            </li>
            <li>
              <a href="https://m.shihuo.cn/column/246.html">
                <div className="img">
                  <img
                    src="http://shihuo.hupucdn.com/appZone/201805/0911/8c8778d4d917f0fb719a2f40ff3b71eb.jpg"
                    alt=""
                  />
                </div>
                <p className="p1">数码测评</p>
                <p className="p2">
                  <span>全面解析热门数码产品</span>
                </p>
              </a>
            </li>
            <li>
              <a href="http://www.shihuo.cn/article/detail/19149.html">
                <div className="img">
                  <img
                    src="http://shihuo.hupucdn.com/appZone/201811/1214/ea91521753d0e0f95f4a5c82094aee79.jpg"
                    alt=""
                  />
                </div>
                <p className="p1">考虑一下荧光绿</p>
                <p className="p2">
                  <span>要想生活过的去</span>
                </p>
              </a>
            </li>
          </ul>
        </section>
      </HotActivityWrap>
    );
  }
}

export default HotActivity;
