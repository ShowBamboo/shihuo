import React, { Component } from "react";

import Banner from "components/banner/Banner";
import Search from "components/search/Search";
import PicBanner from "./PicBanner";
import Hot from "./Hot";
import HotActivity from "./HotActivity";
import List from "./list/List";

class Home extends Component {
  state = {
    value: "搜索商品，品牌"
  };
  render() {
    return (
      <>
        <Banner
          img={[
            "http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1",
            "http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1",
            "http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1",
            "http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1",
            "http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1"
          ]}
          height={"175px"}
        ></Banner>
        <Search title={this.state.value}></Search>
        <PicBanner></PicBanner>
        <Hot></Hot>
        <HotActivity></HotActivity>
        <List></List>
      </>
    );
  }
}

export default Home;
