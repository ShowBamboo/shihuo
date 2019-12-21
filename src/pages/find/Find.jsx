import React, { Component } from "react";

import Banner from "components/banner/Banner";
import BlockList from "./BlockList";
import HotBlock from "./HotBlock";
import TabList from "./TabList";
import GoTop from "components/goTop/GoTop";

export class Find extends Component {
  render() {
    return (
      <div id="wrap" style={{ height: "100%" }}>
        <div>
          <Banner
            img={[
              "http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1",
              "http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1",
              "http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1",
              "http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1",
              "http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1"
            ]}
            height={"135px"}
          ></Banner>
          <BlockList></BlockList>
          <HotBlock></HotBlock>
          <TabList></TabList>
          <GoTop></GoTop>
        </div>
      </div>
    );
  }
}

export default Find;
