import React, { Component } from "react";
import { get } from "utils/http";

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
