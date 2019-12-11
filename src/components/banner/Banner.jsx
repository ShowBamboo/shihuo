import React, { Component } from "react";

import { Carousel, WingBlank } from "antd-mobile";

import { BannerWrap } from "./styledBanner";

class Banner extends Component {
  state = {
    data: ["1", "2", "3", "4", "5"],
    imgHeight: this.props.height
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: this.props.img
      });
    }, 100);
  }
  render() {
    return (
      <BannerWrap>
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite={true}
            dotStyle={{ background: "rgba(255,255,255,0.4)" }}
            dotActiveStyle={{ background: "#fff" }}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="javascripts:;"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={`${val}`}
                  alt=""
                  style={{
                    width: "100%",
                    verticalAlign: "top",
                    height: this.props.height
                  }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </BannerWrap>
    );
  }
}

export default Banner;
