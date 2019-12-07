import React from "react";
import { ListWrap } from "./styledList";

import { Tabs, WhiteSpace, Badge } from "antd-mobile";

import Recommend from "./Recommend";
import Basketball from "./Basketball";
import Running from "./Running";
import Fitness from "./Fitness";
import Freestyle from "./Freestyle";

const tabs = [
  { title: <Badge>推荐</Badge> },
  { title: <Badge>篮球</Badge> },
  { title: <Badge>跑步</Badge> },
  { title: <Badge>健身</Badge> },
  { title: <Badge>潮流</Badge> }
];

const List = () => (
  <ListWrap>
    <div style={{ height: "max-content" }}>
      <Tabs
        tabs={tabs}
        initialPage={0}
        tabBarActiveTextColor="#FF4338"
        tabBarInactiveTextColor="#333"
        tabBarUnderlineStyle={{ borderColor: "#FF4338" }}
        tabBarTextStyle={{ fontSize: ".13rem", fontWeight: 700 }}
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
          <Recommend></Recommend>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "max-content",
            backgroundColor: "#fff"
          }}
        >
          <Basketball></Basketball>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "max-content",
            backgroundColor: "#fff"
          }}
        >
          <Running></Running>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "max-content",
            backgroundColor: "#fff"
          }}
        >
          <Fitness></Fitness>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "max-content",
            backgroundColor: "#fff"
          }}
        >
          <Freestyle></Freestyle>
        </div>
      </Tabs>
      <WhiteSpace />
    </div>
  </ListWrap>
);

export default List;
