import React from "react";

import { SearchResultWrap } from "./styledSearch";

export default function SearchResult() {
  let change = async e => {
    console.log(111);
  };

  return (
    <SearchResultWrap>
      <div className="top_bar">
        <div className="goback">
          <img
            alt=""
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
          />
        </div>
        <div className="searchBox">
          <form id="searchform" action="#">
            <div className="search">
              <input
                type="search"
                className="input"
                name="search"
                placeholder="请输入产品名或商品名"
                id="searchVal"
                value="欧文4"
                onChange={change}
              />
              <input
                type="reset"
                className="reset"
                style={{ display: "none" }}
              />
            </div>
          </form>
          <a
            href="javascripts:;"
            className="cancel"
            style={{ display: "none" }}
          >
            取消
          </a>
        </div>
        <div className="ico_list">
          <img
            alt=""
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
          />
        </div>
        <div className="header_nav" id="header_nav" style={{ display: "none" }}>
          <div className="inner">
            <ul>
              <li>
                <a href="javascripts:;" className="icons index">
                  首页
                </a>
              </li>
              <li>
                <a href="javascripts:;" className="icons me">
                  我的
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="searchList page-route slide-transition">
          <div className="con list_all">
            <div className="searchNum">
              <img
                alt=""
                src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/num_d4bd014.png"
              />
              找到<span>4332</span>条相关结果
            </div>

            <div className="prolist">
              <ul>
                <li>
                  <a href="javascripts:;">
                    <div className="imgs">
                      <span className="get_imgs">
                        <img
                          alt=""
                          src="http://shihuo.hupucdn.com/trade/reposition/2018-11-26/b604fc63bcbcba55e78ea972608d5955.png?imageView2/0/w/300/h/300/interlace/1"
                        />
                      </span>
                    </div>
                    <div className="details_box">
                      <h2>Nike Kyrie 4</h2>
                      <p className="desc">共有51种配色 - 497条购买链接</p>
                      <div className="btm">
                        <div className="price">
                          <span>¥468</span>起
                        </div>
                        <div className="guanzhu">已关注39765962次</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <p className="linkMore">
                <a href="javascripts:;">
                  查看所有4个符合条件商品
                  <img
                    alt=""
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                  />
                </a>
              </p>
            </div>

            <div className="picblock">
              <div className="tit">欧文4的相关图片</div>
              <div className="img_block">
                <a href="javascripts:;">
                  <img
                    alt=""
                    src="http://shihuoproxy.hupucdn.com/aHR0cDovL20uMzYwYnV5aW1nLmNvbS9tb2JpbGVjbXMvczcyMHg3MjBfamZzL3QxOTAzOS8zNDUvMjQ1ODg1NjUxOS8xNTY1NjYvN2JhNDlhOGQvNWFmNDEyOGROZDI3YTcyZWYuanBnIXE3MC5qcGc?imageView2/0/w/213/h/213/interlace/1"
                  />
                </a>
                <a href="javascripts:;">
                  <img
                    alt=""
                    src="http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE4MDEvMTkwOS80YjA5ODlhOTg5YTc5NmI0OGM3ZTFkNGRlYzFlY2IyYi5qcGc?imageView2/0/w/213/h/213/interlace/1"
                  />
                </a>
                <a href="javascripts:;">
                  <img
                    alt=""
                    src="http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE4MDEvMTkwOS80YjA5ODlhOTg5YTc5NmI0OGM3ZTFkNGRlYzFlY2IyYi5qcGc?imageView2/0/w/213/h/213/interlace/1"
                  />
                </a>
              </div>
              <p className="linkMore">
                <a href="javascripts:;">
                  查看所有2225个符合条件商品
                  <img
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                    alt=""
                  />
                </a>
              </p>
            </div>

            <div className="quanwSearch">
              <div className="tit">
                全网搜索<span>（为您搜索445家店铺，共收集1987条正品信息）</span>
              </div>
              <ul>
                <li>
                  <a isconvert="1" href="javascripts:;">
                    <div className="imgs">
                      <span className="get_imgs">
                        <img
                          alt=""
                          src="http://shihuoproxy.hupucdn.com/aHR0cHM6Ly9kdS5odXB1Y2RuLmNvbS9kZjk1MTc3YzZmOTZhODE2NDQ3M2UzMjlmYTViMWY0My5wbmc_aW1hZ2VNb2dyMi90aHVtYm5haWwvMTAwMHgvZXh0ZW50LzEwMDB4MTAwMC9iYWNrZ3JvdW5kL2QyaHBkR1U9?imageView2/0/w/300/h/300/interlace/1"
                        />
                      </span>
                    </div>
                    <div className="details_box">
                      <h2>
                        Nike <span>Kyrie</span> <span>4</span> <span>欧文</span>
                        <span>4</span> 黑金
                      </h2>
                      <p className="price">¥ &nbsp;729.00</p>
                      <div className="btm">
                        <div className="bus">毒</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <p className="linkMore">
                <a href="javascripts:;">
                  查看更多全网相关正品
                  <img
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                    alt=""
                  />
                </a>
              </p>
            </div>

            <div className="shaiwuBlock">
              <div className="tit">欧文4的相关晒物</div>
              <div className="content">
                <a href="javascripts:;">
                  <div className="desc">
                    <h2>欧文4</h2>
                    <p>
                      欧文四可以说是颜值非常高的一款鞋型，配色多样，让人眼花缭乱，确实不知道该买那一双，最后选择了这双凯尔特人，绿色的颜色跟欧文很配，所以选择了这双鞋。
                    </p>
                  </div>
                  <div className="img_block">
                    <span>
                      <img
                        alt=""
                        src="http://shihuo.hupucdn.com/shaiwu/20190313/300x400_bd3e3963-752e-4104-a9a4-f5fceb7f8990.jpg?imageView2/0/w/222/interlace/1"
                      />
                    </span>
                    <span>
                      <img
                        alt=""
                        src="http://shihuo.hupucdn.com/shaiwu/20190313/450x800_8f2d6ba8-584e-452b-aafe-2cffcd71eac1.jpg?imageView2/0/w/222/interlace/1"
                      />
                    </span>
                    <span>
                      <img
                        alt=""
                        src="http://shihuo.hupucdn.com/shaiwu/20190313/450x800_e1a1c636-8947-42ad-920b-2e7be9875567.jpg?imageView2/0/w/222/interlace/1"
                      />
                    </span>
                  </div>
                  <div className="author">
                    有差距的 <span>2019-03-13 </span>
                  </div>
                </a>
              </div>

              <p className="linkMore">
                <a href="javascripts:;">
                  查看所有86条相关晒物
                  <img
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                    alt=""
                  />
                </a>
              </p>
            </div>

            <div className="quanwSearch listLoad">
              <div className="tit">欧文4的相关信息</div>
              <ul>
                <li>
                  <a href="javascripts:;">
                    <div className="imgs">
                      <span className="get_imgs">
                        <img
                          alt=""
                          src="http://shihuo.hupucdn.com/newsIndex11/201911/0103/aefc2eddd34261f326e9966489437bbd.png?imageView2/2/w/200/h/200/interlace/1"
                        />
                      </span>
                    </div>
                    <div className="details_box">
                      <h2>Nike Kyrie 4 Dark Obsidian 藏蓝/炫彩底Low</h2>
                      <p className="desc">实付到手439元起</p>
                      <div className="btm">
                        <div className="bus">京东商城</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SearchResultWrap>
  );
}
