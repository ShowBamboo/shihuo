import React, { Component } from "react";
import BScroll from "better-scroll";
import { withRouter } from "react-router-dom";

import { ListWrap } from "./styledList";

import { get } from "utils/http";

export class Recommend extends Component {
  state = {
    result: []
  };

  async componentDidMount() {
    let data = await get({
      url: "/api/homefis/getNews?pageSize=20&param_str=&type=&channel_type="
    });
    this.setState({
      result: data.data
    });

    let bScroll = new BScroll(document.getElementsByClassName("wrap")[0], {
      pullUpLoad: true,
      click: true,
      probeType: 2,
      mouseWheel: true
    });

    //返回顶部
    bScroll.on("scroll", function() {
      let el = document.getElementById("toTop");
      if (el) {
        if (this.y < -150) {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      }
    });

    //加载新数据
    bScroll.on("pullingUp", async () => {
      let resultMore = await get({
        url: `/api/homefis/getNews?pageSize=20&param_str=1576850672%3A2%3A&type=&channel_type=`
      });
      this.setState({
        result: [...this.state.result, ...resultMore.data]
      });

      bScroll.refresh();
      bScroll.finishPullUp();
    });
  }

  handleClick = () => {
    this.props.history.push("/detail");
  };

  render() {
    return (
      <ListWrap>
        <div className="wrap" ref="wrap">
          <div className="list-view">
            <ul id="shihuo-news">
              {this.state.result.map((value, index) => {
                return (
                  <li key={index} onClick={this.handleClick}>
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
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ListWrap>
    );
  }
}

export default withRouter(Recommend);
