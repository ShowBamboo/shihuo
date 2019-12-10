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
