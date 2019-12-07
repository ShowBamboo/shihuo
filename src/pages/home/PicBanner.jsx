import React, { Component } from "react";

import { PicBannerWrap } from "./styledPicBanner";

export class PicBanner extends Component {
  render() {
    return (
      <PicBannerWrap>
        <div className="pic_banner clearfix">
          <ul className="zone">
            <li className="zone0 clearfix">
              <a
                href="http://m.shihuo.cn/basketball?haojiaId=13#qk=running0"
                style={{ display: "block", overflow: "hidden" }}
              >
                <div className="tit">
                  <h2>篮球</h2>
                  <p className="subtit">纯白系列秒杀</p>
                </div>
                <div className="pic">
                  <img
                    src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="zone1 clearfix">
              <a
                href="http://m.shihuo.cn/running?haojiaId=34514#qk=running1"
                style={{ display: "block", overflow: "hidden" }}
              >
                <div className="tit">
                  <h2>跑步</h2>
                  <p className="subtit">女王节秒杀</p>
                </div>
                <div className="pic">
                  <img
                    src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1"
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="zone2 clearfix">
              <a
                href="http://m.shihuo.cn/fitness#qk=running2"
                style={{ display: "block", overflow: "hidden" }}
              >
                <div className="tit">
                  <h2>健身</h2>
                  <p className="subtit">步瑞特装备秒杀</p>
                </div>
                <div className="pic">
                  <img
                    src="http://shihuo.hupucdn.com/def/20170915/ce4a7229a9d977a97379baa0bd0d9a921505460736.jpg?imageView2/0/w/160/h/160/interlace/1"
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="zone3 clearfix">
              <a
                href="http://m.shihuo.cn/football?haojiaId=189#qk=running3"
                style={{ display: "block", overflow: "hidden" }}
              >
                <div className="tit">
                  <h2>足球</h2>
                  <p className="subtit">其实是在吹总裁</p>
                </div>
                <div className="pic">
                  <img
                    src="http://shihuo.hupucdn.com/trade/reposition/2017-09-13/0ed11999a6797094d6cf3df6db5f7d1a.png?imageView2/0/w/160/h/160/interlace/1"
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="zone4 clearfix">
              <a
                href="http://m.shihuo.cn/freestyle?haojiaId=27355#qk=running4"
                style={{ display: "block", overflow: "hidden" }}
              >
                <div className="tit">
                  <h2>潮流</h2>
                  <p className="subtit">78元短袖秒杀</p>
                </div>
                <div className="pic">
                  <img
                    src="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzI0MDI3NTY5OTQvVEIyb1J3dGpZQm5wdUZqU1pGR1hYWDUxcFhhXyEhMjQwMjc1Njk5NC5qcGc?imageView2/0/w/160/h/160/interlace/1"
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="zone5 clearfix">
              <a
                href="http://m.shihuo.cn/digital?haojiaId=vrDLSU#qk=running5"
                style={{ display: "block", overflow: "hidden" }}
              >
                <div className="tit">
                  <h2>数码</h2>
                  <p className="subtit">家用电吹风</p>
                </div>
                <div className="pic">
                  <img
                    src="http://shihuo.hupucdn.com/appZone/201710/1317/749c6c723b3029420783d6358d19799c.jpg?imageView2/0/w/160/h/160/interlace/1"
                    alt=""
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </PicBannerWrap>
    );
  }
}

export default PicBanner;
