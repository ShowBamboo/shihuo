import React from "react";

import TopBar from "./TopBar";
import Banner from "components/banner/Banner";
import Info from "./Info";
import Comment from "./Comment";

export default function Detail() {
  return (
    <>
      <TopBar></TopBar>
      <Banner
        img={[
          "http://shihuo.hupucdn.com/def/20190108/16752cb762c5b432d32a593d6e1a163c1546943291.jpg",
          "http://shihuo.hupucdn.com/def/20181203/27a04d0e0842db2c0f4c515d643a3f011543809814.jpg?imageView2/1/w/700/h/700/interlace/1",
          "http://shihuo.hupucdn.com/def/20181203/ee9a16e7d45d0ec6f9dab76208455e281543810599.jpg?imageView2/1/w/700/h/700/interlace/1",
          "http://shihuo.hupucdn.com/def/20181229/a6f33fe5ffd116ceaf0dc081a05294341546054798.jpg?imageView2/1/w/700/h/700/interlace/1",
          "http://shihuo.hupucdn.com/trade/reposition/2018-12-03/da1c32ec7716faf197b89d99c2629b60.png?imageView2/1/w/700/h/700/interlace/1"
        ]}
        height={"375px"}
        dotColor={"red"}
      ></Banner>
      <Info></Info>
      <Comment></Comment>
    </>
  );
}
