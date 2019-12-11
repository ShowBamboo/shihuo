import React from "react";
import { TabBar } from "antd-mobile";
import { Route, withRouter } from "react-router-dom";

import Home from "./home/Home";
import Youhui from "./youhui/Youhui";
import Find from "./find/Find";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home",
      hidden: false,
      fullScreen: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      selectedTab: props.location.pathname.substr(1)
    };
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#444"
          tintColor="#FF4338"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://sh1.hoopchina.com.cn/images/trademobile/common/index.png?201903111600) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "home"}
            onPress={() => {
              this.setState({
                selectedTab: "home"
              });
              this.props.history.push("/home");
            }}
            data-seed="logId"
          >
            <Route path="/home" render={() => <Home></Home>}></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://sh1.hoopchina.com.cn/images/trademobile/common/youhui-on.png?201903111600) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="优惠"
            key="youhui"
            selected={this.state.selectedTab === "youhui"}
            onPress={() => {
              this.setState({
                selectedTab: "youhui"
              });
              this.props.history.push("/youhui");
            }}
            data-seed="logId1"
          >
            <Route path="/youhui" render={() => <Youhui></Youhui>}></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(http://sh1.hoopchina.com.cn/images/trademobile/common/find-on.png?201903111600) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="发现"
            key="find"
            selected={this.state.selectedTab === "find"}
            onPress={() => {
              this.setState({
                selectedTab: "find"
              });
              this.props.history.push("/find");
            }}
          >
            <Route path="/find" render={() => <Find></Find>}></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei.png?201903111600"
            }}
            selectedIcon={{
              uri:
                "http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600"
            }}
            title="装备"
            key="zhuangbei"
            selected={this.state.selectedTab === "zhuangbei"}
            onPress={() => {
              this.setState({
                selectedTab: "zhuangbei"
              });
            }}
          >
            <div>4</div>
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "http://sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600"
            }}
            selectedIcon={{
              uri:
                "http://sh1.hoopchina.com.cn/images/trademobile/common/more-on.png?201903111600"
            }}
            title="更多"
            key="user"
            selected={this.state.selectedTab === "user"}
            onPress={() => {
              this.setState({
                selectedTab: "user"
              });
            }}
          >
            <div>5</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Layout);
