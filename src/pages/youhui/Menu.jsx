/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";

import { MenuWrap } from "./styledMenu";

const mapDispatch = dispatch => ({
  loadData(url) {
    dispatch({
      type: "loadData",
      url
    });
  }
});

class Menu extends Component {
  state = {
    index: 1
  };

  clickOne = index => {
    return () => {
      this.props.loadData(
        "/api/youhui/list?r=999&page=1&page_size=30&publish_date="
      );
      this.setState({
        index
      });
    };
  };
  clickTwo = index => {
    return () => {
      this.props.loadData(
        "/api/youhui/list?r=1&page=1&page_size=30&publish_date="
      );
      this.setState({
        index
      });
    };
  };

  clickThree = index => {
    return () => {
      this.props.loadData(
        "/api/youhui/list?r=2&page=1&page_size=30&publish_date="
      );
      this.setState({
        index
      });
    };
  };

  clickFour = index => {
    return () => {
      this.props.loadData(
        "/api/youhui/list?r=3&page=1&page_size=30&publish_date="
      );
      this.setState({
        index
      });
    };
  };

  clickFive = index => {
    return () => {
      this.props.loadData(
        "/api/youhui/list?r=4&page=1&page_size=30&publish_date="
      );
      this.setState({
        index
      });
    };
  };

  clickSix = () => {
    let el1 = document.getElementById("menu-list-alertbox");
    let el2 = document.getElementById("layerBox-bg");

    el1.style.display = "block";
    el2.style.display = "block";
  };

  render() {
    return (
      <MenuWrap>
        <div
          className="menu-list swiper-container-horizontal swiper-container-free-mode"
          id="menu-list"
        >
          <ul
            className="swiper-wrapper clearfix"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <li
              className="swiper-slide on"
              className={this.state.index === 1 ? "on" : ""}
              onClick={this.clickOne(1)}
            >
              <a href="javascripts:void(0)">精选</a>
            </li>
            <li
              className="swiper-slide"
              className={this.state.index === 2 ? "on" : ""}
              onClick={this.clickTwo(2)}
            >
              <a href="javascripts:void(0)">鞋类</a>
            </li>
            <li
              className="swiper-slide"
              className={this.state.index === 3 ? "on" : ""}
              onClick={this.clickThree(3)}
            >
              <a href="javascripts:void(0)">服饰</a>
            </li>
            <li
              className="swiper-slide"
              className={this.state.index === 4 ? "on" : ""}
              onClick={this.clickFour(4)}
            >
              <a href="javascripts:void(0)">数码</a>
            </li>
            <li
              className="swiper-slide"
              className={this.state.index === 5 ? "on" : ""}
              onClick={this.clickFive(5)}
            >
              <a href="javascripts:void(0)">兴趣</a>
            </li>
            <li className="swiper-slide">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          </ul>
          <div className="tag-btn" onClick={this.clickSix}></div>
        </div>
      </MenuWrap>
    );
  }
}

export default connect(null, mapDispatch)(Menu);
