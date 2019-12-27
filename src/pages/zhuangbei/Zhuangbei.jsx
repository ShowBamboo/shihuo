import React, { Component } from "react";

import Search from "components/search/Search";
import Menu from "./Menu";
import Banner from "./Banner";
import Tag from "./Tag";
import Basketball from "pages/home/list/Basketball";
import GoTop from "components/goTop/GoTop";

class Zhuangbei extends Component {
  state = {
    value: "搜索全网低价好券",
    bgColor: "#f7f7f7",
    inputBg: "#ebebeb",
    basketball: {
      title: "篮球",
      englishTitle: "BASKETBALL",
      subTitle: "匹克闪现评测",
      img:
        "http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1"
    },
    running: {
      title: "跑步",
      englishTitle: "RUNNING",
      subTitle: "户外跑鞋换购",
      img:
        "http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png?imageView2/0/w/400/h/208/interlace/1"
    },
    casual: {
      title: "潮流",
      englishTitle: "CASUAl",
      subTitle: "年度鞋款回顾",
      img:
        "http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1"
    },
    fitness: {
      title: "健身",
      englishTitle: "FITNESS",
      subTitle:
        "热款丨Nike 男子休闲运动短裤 AR2376/AT5268/836278, Landcase 暗黑系列大容量镭射双肩包 Z-301, adidas 运动短袖T恤 DN7389, Under Armour 运动长袖T恤 1328496",
      img:
        "http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png?imageView2/0/w/400/h/208/interlace/1"
    },
    tags: [
      [
        "篮球鞋",
        "篮球服饰",
        "篮球配件",
        "篮球",
        "Nike",
        "adidas",
        "Jordan",
        "全部"
      ],
      [
        "跑步鞋",
        "跑步服饰",
        "跑步配件",
        "运动补给",
        "adidas",
        "asics",
        "New Balance",
        "全部"
      ],
      ["鞋类", "服装", "配件", "耳机", "Converse", "CASIO", "Vans", "全部"],
      [
        "健身装备",
        "健身用品",
        "营养补剂",
        "全部类目",
        "Nike",
        "adidas",
        "Jordan",
        "全部"
      ]
    ],
    position: "static"
  };
  render() {
    return (
      <div id="zhuangbeiWrap" style={{ height: "100%" }}>
        <div id="scroll">
          <Search
            title={this.state.value}
            bgColor={this.state.bgColor}
            inputBg={this.state.inputBg}
            position={this.state.position}
          ></Search>
          <Menu></Menu>
          <Banner msg={this.state.basketball}></Banner>
          <Tag tag={this.state.tags[0]}></Tag>
          <Banner msg={this.state.running}></Banner>
          <Tag tag={this.state.tags[1]}></Tag>
          <Banner msg={this.state.casual}></Banner>
          <Tag tag={this.state.tags[2]}></Tag>
          <Banner msg={this.state.fitness}></Banner>
          <Tag tag={this.state.tags[3]}></Tag>
          <div
            className="h2"
            style={{
              fontSize: "16px",
              background: "#fff",
              padding: ".1rem 0 0 .1rem"
            }}
          >
            最新推荐
          </div>
          <Basketball></Basketball>
          <GoTop></GoTop>
        </div>
      </div>
    );
  }
}

export default Zhuangbei;
