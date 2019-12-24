import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import TopBar from "./TopBar";
import Banner from "components/banner/Banner";
import Info from "./Info";
import Comment from "./Comment";

const mapState = state => ({
  data: state.reducers.data
});

function Detail(props) {
  const [state, setstate] = useState({});

  useEffect(() => {
    setstate(props.data);
  }, [props.data]);

  return (
    <>
      <TopBar></TopBar>
      <div style={{ marginTop: ".48rem" }}>
        <Banner
          img={[
            state.img,
            "http://shihuo.hupucdn.com/def/20181203/27a04d0e0842db2c0f4c515d643a3f011543809814.jpg?imageView2/1/w/700/h/700/interlace/1",
            "http://shihuo.hupucdn.com/trade/reposition/2019-05-13/6fb9e5ae186fed6a5bcadddd909a3f72.png?imageView2/1/w/700/h/700/interlace/1",
            "http://shihuo.hupucdn.com/newsIndex11/201912/2317/9819a4d6bb5b01f0deaf86ee41cc5f11.jpg",
            "http://shihuo.hupucdn.com/def/20181112/a917bcb5589f64dccf497b0cb445d0531542013818.jpg"
          ]}
          height={"3.75rem"}
          dotColor={"red"}
        ></Banner>
      </div>
      <Info></Info>
      <Comment></Comment>
    </>
  );
}
export default connect(mapState, null)(Detail);
