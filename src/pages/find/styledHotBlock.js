import styled from "styled-components";

export const HotBlockWrap = styled.div`
  .hotBlock {
    width: 100%;
    overflow: hidden;
    background: #fff;
    padding-bottom: 0.15rem;
    border-bottom: 1px #ececec solid;
    .title {
      padding: 0.1rem;
      text-align: left;
      font-size: 14px;
      color: #222;
    }
    .slide-container {
      padding: 0 0.1rem;
      height: 0.62rem;
      overflow: hidden;
      overflow-x: auto;
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
        .swiper-slide {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          position: relative;
          text-align: center;
          padding-right: 0.03rem;
          a {
            display: block;
            position: relative;
            height: 100%;
            .imgs {
              width: 100%;
              overflow: hidden;
              position: relative;
              img {
                width: 100%;
                display: block;
              }
            }
            .blackbg {
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              background-color: rgba(0, 0, 0, 0.2);
              p {
                width: 100%;
                font-size: 0.13rem;
                position: absolute;
                top: 50%;
                left: 0;
                padding: 0 0.1rem;
                transform: translateY(-50%);
                z-index: 10;
                color: #fff;
                word-wrap: break-word;
              }
            }
          }
        }
        .look-more {
          width: 0.43rem;
          padding: 0.05rem 0.09rem 0;
          color: #999;
          text-align: center;
          display: block;
          flex-shrink: 0;
          font-size: 12px;
          &:after {
            content: "";
            display: block;
            background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-arrow_7dcc7b2.png)
              no-repeat scroll center center transparent;
            width: 0.1rem;
            height: 0.1rem;
            margin: 0.03rem auto 0;
          }
        }
      }
    }
  }
`;
