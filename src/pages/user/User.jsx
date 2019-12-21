import React, { useState } from "react";

import Banner from "./Banner";
import MenuList from "./MenuList";

export default function User() {
  const [state1] = useState([
    {
      img:
        "http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png",
      name: "我的收藏",
      title: "我的识货"
    },
    {
      img:
        "http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png",
      name: "我的晒物"
    },
    {
      img: "http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png",
      name: "我的礼品"
    }
  ]);
  const [state2] = useState([
    {
      img:
        "http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png",
      name: "推荐店铺",
      title: "识货必备"
    },
    {
      img:
        "http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png",
      name: "黑科技选鞋"
    }
  ]);
  return (
    <>
      <Banner></Banner>
      <MenuList data={state1}></MenuList>
      <MenuList data={state2}></MenuList>
    </>
  );
}
