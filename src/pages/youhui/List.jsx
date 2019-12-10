import React, { Component } from "react";
import { connect } from "react-redux";

import { ListWrap } from "../home/list/styledList";

import { get } from "utils/http";

const mapState = state => ({
  url: state.youhui.url
});

class List extends Component {
  state = {
    result: []
  };

  async componentDidMount() {
    let data = await get({
      url: "/api/youhui/list?r=999&page=1&page_size=30&publish_date="
    });
    this.setState({
      result: data.data
    });
  }

  async componentWillReceiveProps(nextProps, prevProps) {
    // 当传入的url发生变化的时候，更新state

    if (nextProps.url !== prevProps.url) {
      let data = await get({
        url: nextProps.url
      });
      this.setState({
        result: data.data
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
                  <a
                    className="link-a clearfix"
                    href="http://m.shihuo.cn/article/detail/43550.html#qk=news_general&amp;noticeid=313835"
                  >
                    <div className="imgs">
                      <span className="get_imgs">
                        <img src={`${value.img}`} alt="" className="lazy" />
                      </span>
                    </div>
                    <div className="details_box">
                      <h2>{value.title}</h2>
                      {value.avatar ? (
                        <div className="desc face">
                          <span>
                            <img
                              className="lazy"
                              alt=""
                              src={`${value.avatar}`}
                            />
                          </span>
                          {value.author_name}
                        </div>
                      ) : value.intro ? (
                        <p className="desc single3">
                          <img
                            src="//sh1.hoopchina.com.cn/images/trademobile/quote_left.png"
                            alt=""
                          />
                          {value.intro}
                          <img
                            src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png"
                            alt=""
                          />
                        </p>
                      ) : (
                        <p className="subtitle">{value.subtitle}</p>
                      )}

                      <div className="from">
                        <div className="column_name">
                          &nbsp;{value.business}
                        </div>
                        <div className="date">{value.date}</div>
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

export default connect(mapState, null)(List);
