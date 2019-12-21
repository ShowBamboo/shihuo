import React, { Component } from "react";
import { get } from "utils/http";
import BScroll from "better-scroll";

import { ListWrap } from "./styledList";

export class List extends Component {
  state = {
    result: []
  };

  async componentDidMount() {
    let data = await get({
      url: this.props.url.url
    });
    this.setState({
      result: data.data
    });

    let bScroll = new BScroll(document.getElementById("wrap"), {
      pullUpLoad: true,
      click: true,
      probeType: 2
    });

    bScroll.on("pullingUp", async () => {
      let resultMore = await get({
        url: "/api/find/mobileList?tag_id=283&param_str=2019-12-14%2014:55:09"
      });

      this.setState({
        result: [...this.state.result, ...resultMore.data]
      });

      bScroll.refresh();
      bScroll.finishPullUp();
    });
  }

  render() {
    return (
      <ListWrap>
        <div className="jingxList">
          <ul id="jingxList">
            {this.state.result.map((value, index) => {
              return (
                <li key={index}>
                  <div className="author">
                    <a href="javascripts:;" className="face">
                      <img src={value.data.avatar} alt="" />
                    </a>
                    <div className="nameM">
                      <p className="name">{value.data.author_name}</p>
                      <p className="time">{value.data.date}</p>
                    </div>
                  </div>
                  <div className="content">
                    <a href="javascripts:;">
                      <div className="tit">{value.data.title}</div>
                      <p className="imgOne">
                        <img src={value.data.img} alt="" className="lazy" />
                      </p>
                      <div className="tags">
                        <span className="like">{value.data.praise}</span>
                        <span className="say">{value.data.reply_count}</span>
                      </div>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </ListWrap>
    );
  }
}

export default List;
