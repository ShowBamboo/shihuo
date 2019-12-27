import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { get } from "utils/http";
import { SearchResultWrap } from "./styledSearch";

function SearchResult(props) {
  const [keywords, setkeywords] = useState(props.location.query.keywords);
  const [goods, setgoods] = useState({ list: [] });
  const [pic, setpic] = useState({ list: [] });
  const [quan, setquan] = useState({ list: [] });
  const [shaiwu, setshaiwu] = useState({ list: [] });
  const [news, setnews] = useState({ list: [] });

  useEffect(() => {
    async function foo() {
      let goodsResult = await get({
        url: `/api/search?page=1&page_size=3&type=goods&keywords=${keywords}`
      });
      setgoods(goodsResult.data);

      let picResult = await get({
        url: `/api/search?page=1&page_size=3&type=pic&keywords=${keywords}`
      });
      setpic(picResult.data);

      let quanResult = await get({
        url: `/api/search/allweb?page=1&page_size=3&keywords=${keywords}`
      });
      setquan(quanResult.data);

      let shaiwuResult = await get({
        url: `/api/search?page=1&page_size=1&type=shaiwu&keywords=${keywords}`
      });
      setshaiwu(shaiwuResult.data);

      let newsResult = await get({
        url: `/api/search?page=1&page_size=30&type=news&keywords=${keywords}`
      });
      setnews(newsResult.data);
    }
    foo();
  }, [keywords]);

  const [state, setstate] = useState("none");
  let handleClick = () => {
    if (state === "none") {
      setstate("block");
    } else {
      setstate("none");
    }
  };

  let change = async e => {
    console.log(111);
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
    <SearchResultWrap>
      <div className="top_bar">
        <div className="goback" onClick={goBack}>
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
                value={keywords}
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
        <div className="ico_list" onClick={handleClick}>
          <img
            alt=""
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
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
                {goods.list.map((value, index) => (
                  <li key={value.id}>
                    <a href="javascripts:;">
                      <div className="imgs">
                        <span className="get_imgs">
                          <img alt="" src={value.pic} />
                        </span>
                      </div>
                      <div className="details_box">
                        <h2>{value.name}</h2>
                        <p className="desc">{value.intro}</p>
                        <div className="btm">
                          <div className="price">
                            <span>¥{value.price}</span>起
                          </div>
                          <div className="guanzhu">已关注{value.hits}次</div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="linkMore">
                <a href="javascripts:;">
                  查看所有{goods.num}个符合条件商品
                  <img
                    alt=""
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                  />
                </a>
              </p>
            </div>

            <div className="picblock">
              <div className="tit">{keywords}的相关图片</div>
              <div className="img_block">
                {pic.list.map((value, index) => (
                  <a href="javascripts:;" key={index}>
                    <img alt="" src={value.pic} />
                  </a>
                ))}
              </div>
              <p className="linkMore">
                <a href="javascripts:;">
                  查看所有{pic.num}个符合条件商品
                  <img
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                    alt=""
                  />
                </a>
              </p>
            </div>

            <div className="quanwSearch">
              <div className="tit">
                全网搜索
                <span>
                  （为您搜索{quan.shop_num}家店铺，共收集{quan.goods_num}
                  条正品信息）
                </span>
              </div>
              <ul>
                {quan.list.map((value, index) => (
                  <li key={value.id}>
                    <a isconvert="1" href="javascripts:;">
                      <div className="imgs">
                        <span className="get_imgs">
                          <img alt="" src={value.img} />
                        </span>
                      </div>
                      <div className="details_box">
                        <h2
                          dangerouslySetInnerHTML={{ __html: value.title }}
                        ></h2>
                        <p className="price">¥ &nbsp;{value.price}</p>
                        <div className="btm">
                          <div className="bus">{value.store}</div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
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
              <div className="tit">{keywords}的相关晒物</div>
              <div className="content">
                {shaiwu.list.map((value, index) => (
                  <a href="javascripts:;" key={index}>
                    <div className="desc">
                      <h2>{value.title[0]}</h2>
                      <p>{value.intro}</p>
                    </div>
                    <div className="img_block">
                      {value.img_attr.map((value, index) => (
                        <span key={index}>
                          <img alt="" src={value} />
                        </span>
                      ))}
                    </div>
                    <div className="author">
                      {value.author_name} <span>{value.date} </span>
                    </div>
                  </a>
                ))}
              </div>

              <p className="linkMore">
                <a href="javascripts:;">
                  查看所有{shaiwu.num}条相关晒物
                  <img
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                    alt=""
                  />
                </a>
              </p>
            </div>

            <div className="quanwSearch listLoad">
              <div className="tit">{keywords}的相关信息</div>
              <ul>
                {news.list.map((value, index) => (
                  <li key={value.id}>
                    <a href="javascripts:;">
                      <div className="imgs">
                        <span className="get_imgs">
                          <img alt="" src={value.img_url} />
                        </span>
                      </div>
                      <div className="details_box">
                        <h2>{value.title[0]}</h2>
                        <p className="desc">{value.subtitle}</p>
                        <div className="btm">
                          <div className="bus">{value.business}</div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="linkMore">
                <a href="javascripts:;">
                  查看所有{news.num}条相关晒物
                  <img
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png"
                    alt=""
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SearchResultWrap>
  );
}

export default withRouter(SearchResult);
