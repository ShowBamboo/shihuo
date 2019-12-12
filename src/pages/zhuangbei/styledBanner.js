import styled from "styled-components";

export const BannerWrap = styled.div`
  .banner-area {
    position: relative;
    height: 195px;
    overflow: hidden;
    .bg-img {
      img {
        width: 100%;
        height: 195px;
      }
    }
    .click {
      display: block;
      color: #fff;
      .bg-color {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 195px;
        background-color: #000;
        opacity: 0.5;
      }
      .ban-txt {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        top: 0.2rem;
        text-align: center;
        color: #fff;
        .h2 {
          font-size: 25px;
          text-shadow: 1px 1px 3px #666;
          s {
            font-weight: 350;
          }
          img {
            width: 22px;
            height: 22px;
            display: inline-block;
            margin: 0.05rem 0 0 0.1rem;
          }
        }
        .txt {
          font-size: 14px;
          text-align: center;
          p {
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0 auto;
          }
        }
        .list {
          position: relative;
          z-index: 8;
        }
        .left {
          position: absolute;
          left: 0.2rem;
          top: 0.15rem;
          img {
            width: 23.5px;
            height: 120px;
          }
        }
        .right {
          position: absolute;
          right: 0.2rem;
          top: 0.15rem;
          img {
            width: 16.5px;
            height: 120px;
          }
        }
      }
    }
  }
`;
