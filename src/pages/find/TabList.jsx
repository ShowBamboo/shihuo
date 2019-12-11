import React from "react";

import { Tabs, WhiteSpace } from "antd-mobile";

import List from "./List";

class TabList extends React.Component {
  state = {
    num: 0
  };
  render() {
    const tabs = [
      { title: "今日推荐" },
      { title: "篮球" },
      { title: "视频" },
      { title: "最近资讯" },
      { title: "潮流风向" },
      { title: "3C新奇特" },
      { title: "潮鞋志" },
      { title: "球鞋90秒" }
    ];

    const url = [
      { url: "/api/find/mobileList?tag_id=283&param_str=" },
      { url: "/api/find/mobileList?tag_id=347&param_str=" },
      { url: "/api/find/mobileList?tag_id=281&param_str=" },
      { url: "/api/find/mobileList?tag_id=270&param_str=" },
      { url: "/api/find/mobileList?tag_id=318&param_str=" },
      { url: "/api/find/mobileList?tag_id=273&param_str=" },
      { url: "/api/find/mobileList?tag_id=285&param_str=" },
      { url: "/api/find/mobileList?tag_id=136&param_str=" }
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs
          tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
          tabBarTextStyle={{ fontSize: "13px" }}
          tabBarActiveTextColor="#FF4338"
          tabBarUnderlineStyle={{ borderColor: "#FF4338" }}
          onTabClick={(tab, index) => {
            this.setState({
              num: index
            });
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "max-content",
              backgroundColor: "#fff"
            }}
          >
            <List url={url[this.state.num]}></List>
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default TabList;
