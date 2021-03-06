import React, { Component } from "react";
import BScroll from "better-scroll";

import { ListWrap } from "./styledList";

import { get } from "utils/http";

export class Basketball extends Component {
  state = {
    result: []
  };

  async componentDidMount() {
    let data = await get({
      url:
        "/api/homefis/getNews?pageSize=20&param_str=&type=basketball&channel_type="
    });
    this.setState({
      result: data.data
    });

    if (document.getElementById("zhuangbeiWrap")) {
      let bScroll = new BScroll(document.getElementById("zhuangbeiWrap"), {
        pullUpLoad: true,
        click: true,
        probeType: 2,
        mouseWheel: true
      });

      bScroll.on("pullingUp", async () => {
        let resultMore = await get({
          url: `/api/homefis/getNews?pageSize=20&param_str=1577320212_1577428964_2&type=basketball&channel_type=`
        });
        console.log(resultMore.data);

        this.setState({
          result: [...this.state.result, ...resultMore.data]
        });

        bScroll.refresh();
        bScroll.finishPullUp();
      });
    }
  }

  render() {
    return (
      <ListWrap>
        <div className="list-view">
          <ul id="shihuo-news">
            {this.state.result.map((value, index) => {
              return (
                <li key={index}>
                  <a className="link-a clearfix" href="javascripts:;">
                    <div className="imgs">
                      <span className="get_imgs">
                        <img
                          src={`${value.data.img}`}
                          alt=""
                          className="lazy"
                        />
                      </span>
                    </div>
                    <div className="details_box">
                      <h2>{value.data.title}</h2>
                      {value.data.avatar ? (
                        <div className="desc face">
                          <span>
                            <img
                              className="lazy"
                              alt=""
                              src={`${value.data.avatar}`}
                            />
                          </span>
                          {value.data.author_name}
                        </div>
                      ) : value.data.intro ? (
                        <p className="desc single3">
                          <img
                            src="//sh1.hoopchina.com.cn/images/trademobile/quote_left.png"
                            alt=""
                          />
                          {value.data.intro}
                          <img
                            src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png"
                            alt=""
                          />
                        </p>
                      ) : (
                        <p className="subtitle">{value.data.subtitle}</p>
                      )}

                      <div className="from">
                        {value.data.price ? (
                          <div className="price">
                            {value.data.merchant}&nbsp;
                            <span>¥{value.data.price}</span>
                          </div>
                        ) : value.data.merchant ? (
                          <div className="column_name">
                            &nbsp;{value.data.merchant}
                          </div>
                        ) : (
                          <div className="column_name">
                            <span>败鞋清单</span>
                          </div>
                        )}
                        <div className="guanzhu">
                          <img
                            src="//sh1.hoopchina.com.cn/images/trademobile/look.png"
                            alt=""
                          />
                          {value.data.hits}
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ListWrap>
    );
  }
}

export default Basketball;
