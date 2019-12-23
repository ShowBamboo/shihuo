import styled from "styled-components";

export const MenuWrap = styled.div`
  .menu-list {
    width: 100%;
    border-top: 1px solid #f0f3f5;
    border-bottom: 1px solid #f0f3f5;
    height: 0.44rem;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
      transition-timing-function: ease-out;
      margin: 0 auto;
      li {
        line-height: 0.44rem;
        height: 0.44rem;
        color: #333;
        padding: 0 0.15rem;
        text-align: center;
        background: #fff;
        width: auto;
        a {
          font-size: 13px;
          color: #333;
          height: 0.44rem;
          line-height: 0.44rem;
          display: inline-block;
        }
      }
      .on a {
        color: #ff4338;
        position: relative;
        :after {
          content: "";
          position: absolute;
          width: 0.3rem;
          height: 0.02rem;
          background: red;
          bottom: 0.01rem;
          left: 50%;
          margin-left: -0.15rem;
          border-radius: 0.2rem;
        }
      }
      .swiper-slide {
        flex-shrink: 0;
        position: relative;
      }
    }
    .tag-btn {
      width: 0.57rem;
      height: 100%;
      background: rgba(255, 255, 255, 0.8)
        url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png)
        no-repeat;
      background-size: 100% auto;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  }
`;

export const MenuListWrap = styled.div`
  .layerBox-bg {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 87;
  }
  .menu-list-layer {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 88;
    width: 100%;
    .tags-btn {
      width: 100%;
      border-top: 1px solid #f0f3f5;
      border-bottom: 1px solid #f0f3f5;
      height: 0.44rem;
      line-height: 0.44rem;
      padding-left: 0.08rem;
      color: #333;
      font-size: 14px;
      overflow: hidden;
      position: relative;
      a {
        background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-show_1dbdeb5.png)
          no-repeat;
        background-size: 100% auto;
        position: absolute;
        right: 0;
        top: 0;
        width: 0.57rem;
        height: 100%;
      }
    }
    .clearfix {
      display: flex;
      flex-wrap: wrap;
      li {
        /* float: left; */
        line-height: 0.44rem;
        height: 0.44rem;
        overflow: hidden;
        color: #333;
        width: 25%;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        a {
          color: #444;
          text-decoration: none;
        }
      }
      li.on {
        color: #ff4338;
      }
    }
    .hotsearch {
      text-align: center;
      color: #999;
      font-size: 14px;
      span {
        width: 0.5rem;
        height: 1px;
        background-color: #f0f3f5;
        display: inline-block;
        margin: 0 0.1rem;
        vertical-align: middle;
      }
    }
  }
`;
